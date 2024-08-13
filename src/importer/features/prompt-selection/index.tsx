import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/button";
import Box from "../../components/Box";
import { PromptSelectionProps } from "./types";
import style from "./style/Complete.module.scss";
import { PiArrowCounterClockwise, PiCheckBold } from "react-icons/pi";
import DropdownFields from "../map-columns/components/DropDownFields";

export default function PromptSelection({ reload, close, isModal, prompts }: PromptSelectionProps) {
  const { t } = useTranslation();
  let templateFields: any[] = [];
  // if (prompts && prompts.length > 0) {
  //
  //   templateFields = prompts.reduce((acc, item) => {
  //     acc[item.id] = {
  //       value: item.id,
  //       name: item.label
  //     }
  //   }, {})
  // }
  console.log({prompts});

  const setSelectedValues = () => {
    console.log("setting selected values");
  }

  return (
    <Box className={style.content}>
      <>
        <span className={style.icon}>
          <PiCheckBold />
        </span>
        <div>{t("Select a Prompt")}</div>
        <div className={style.actions}>
          <DropdownFields
              options={{1: {name: 'abc', value: 1}}}
              // options={templateFields}
              value={"1"}
              placeholder={t("Select review prompt")}
              onChange={(key: string) => console.log({selectedKey: key})}
              selectedValues={[{key: "1", selected: true}]}
              updateSelectedValues={setSelectedValues}
            />

          <Button type="button" colorScheme="secondary" leftIcon={<PiArrowCounterClockwise />} onClick={reload}>
            {t("Upload another file")}
          </Button>
          {isModal && (
            <Button type="button" colorScheme="primary" leftIcon={<PiCheckBold />} onClick={close}>
              {t("Done")}
            </Button>
          )}
        </div>
      </>
    </Box>
  );
}
