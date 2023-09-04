import { Button, Table } from "@tableflow/ui-library";
import UppyWrapper from "../../components/UppyWrapper";
import useTemplateTable from "./hooks/useTemplateTable";
import { UploaderProps } from "./types";
import style from "./style/Uploader.module.scss";

export default function Uploader({ template, importerId, metadata, skipHeaderRowSelection, endpoint, onSuccess, schemaless }: UploaderProps) {
  const fields = useTemplateTable(template.columns);

  const onFileUpload = (result: any) => {
    // Get tusId from the uploadURL
    const tusId = result?.successful?.[0]?.response?.uploadURL?.split("/").pop() || "";
    onSuccess(tusId);
  };

  let sdkDefinedTemplate;
  if (template.is_sdk_defined) {
    // Only pass in the template to the UppyWrapper if it is defined from the SDK, as this is the only time we need to
    // persist the template with the upload
    sdkDefinedTemplate = template;
  }

  const uppyWrapper = (
    <UppyWrapper
      onSuccess={onFileUpload}
      importerId={importerId}
      metadata={metadata}
      skipHeaderRowSelection={skipHeaderRowSelection}
      endpoint={endpoint}
      sdkDefinedTemplate={sdkDefinedTemplate}
      schemaless={schemaless}
    />
  );

  if (schemaless) {
    return uppyWrapper;
  }

  function download() {
    const { columns } = template;
    const csvData = `"${columns.map((obj) => obj.key).join('","')}"`;

    const link = document.createElement("a");
    link.href = URL.createObjectURL(new Blob([csvData], { type: "text/csv" }));
    link.download = "example.csv";
    link.click();
  }

  return (
    <div className={style.content}>
      {uppyWrapper}

      <div className={style.box}>
        <Table data={fields} background="dark" columnWidths={["65%", "35%"]} columnAlignments={["", "center"]} />
        <Button icon="download" onClick={download} variants={["secondary"]}>
          Download Example File
        </Button>
      </div>
    </div>
  );
}
