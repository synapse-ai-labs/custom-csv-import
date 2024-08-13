import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/button";
import Box from "../../components/Box";
import { PromptSelectionProps } from "./types";
import style from "./style/Complete.module.scss";
import { PiArrowCounterClockwise, PiCheckBold } from "react-icons/pi";
import Select from 'react-select';
import Checkbox from "../../components/Checkbox";

export default function PromptSelection({ reload, close, isModal, prompts, onSuccess }: PromptSelectionProps) {
  const { t } = useTranslation();

  const [selectedPrompt, setSelectedPrompt] = useState<string>();

  const [inheritRepoPrompt, setInheritRepoPrompt] = useState(true);


  console.log({prompts});

  const setSelectedValues = () => {
    console.log("setting selected values");
  }

  const handleChange = (selectedValue: string) => {
    console.log({selectedOption: selectedValue});
    setSelectedPrompt(selectedValue)
  }

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  const handleCheckboxSelection = (e: any) => {
    console.log({checkboxSelection: e.target.checked});
    setInheritRepoPrompt(e.target.checked);
  }

  const handleCompleteClick = (e: any) => {
    console.log("handleCompleteClick clicked");
    e.preventDefault();
    onSuccess(selectedPrompt!, inheritRepoPrompt);
  }


  return (
    <Box className={style.content}>
      <>
        {/*<span className={style.icon}>*/}
        {/*  <PiCheckBold />*/}
        {/*</span>*/}
        <div>{t("Select a Prompt")}</div>
        <div>
          <Select
            // value={selectedOption}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                backgroundColor: 'white',
              }),
              option: (styles, { data, isDisabled, isFocused, isSelected }) => {
                return {
                  ...styles,
                  color: 'black',
                  cursor: isDisabled ? 'not-allowed' : 'default',
                }
              },
            }}
            onChange={(selectedOption: any) => handleChange(selectedOption)}
            options={options}
          />
        </div>
        <div>
          <Checkbox
              checked={inheritRepoPrompt}
              onChange={(e) => handleCheckboxSelection(e)}
          >Inherit repository review prompts</Checkbox>
        </div>
        <div className={style.actions}>
          {isModal && (
            <Button onClick={handleCompleteClick} type="submit" colorScheme="primary" leftIcon={<PiCheckBold />} >
              {t("Complete")}
            </Button>
          )}
        </div>
      </>
    </Box>
  );
}
