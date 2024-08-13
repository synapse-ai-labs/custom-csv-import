import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/button";
import Box from "../../components/Box";
import { PromptSelectionProps } from "./types";
import style from "./style/Complete.module.scss";
import { PiArrowCounterClockwise, PiCheckBold } from "react-icons/pi";
import Select from 'react-select';

export default function PromptSelection({ reload, close, isModal, prompts }: PromptSelectionProps) {
  const { t } = useTranslation();
  console.log({prompts});

  const setSelectedValues = () => {
    console.log("setting selected values");
  }

  const handleChange = (e: any) => {
    console.log({selectedOption: e.target});
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Box className={style.content}>
      <>
        <span className={style.icon}>
          <PiCheckBold />
        </span>
        <div>{t("Select a Prompt")}</div>
        <div className={style.actions}>
          <Select
            // value={selectedOption}
            onChange={(e: any) => handleChange(e)}
            options={options}
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
