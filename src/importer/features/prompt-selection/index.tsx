import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/button";
import Box from "../../components/Box";
import { PromptSelectionProps } from "./types";
import style from "./style/Complete.module.scss";
import { PiCheckBold } from "react-icons/pi";
import Select from 'react-select';
import Checkbox from "../../components/Checkbox";

export default function PromptSelection({ isModal, prompts, onSuccess }: PromptSelectionProps) {
  const { t } = useTranslation();

  const [selectedPrompt, setSelectedPrompt] = useState<string>();

  const [inheritRepoPrompt, setInheritRepoPrompt] = useState(true);


  console.log({prompts});

  const setSelectedValues = () => {
    console.log("setting selected values");
  }

  const handleChange = (selectedValue: any) => {
    console.log({selectedOption: selectedValue.value});
    setSelectedPrompt(selectedValue.value)
  }

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
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span>{t("Select review prompt")}</span>
          <span style={{marginLeft: 10}}>
            <Select
              required={true}
              placeholder={'Select review prompt'}
              styles={{
                control: (baseStyles, state) => ({
                  ...baseStyles,
                  backgroundColor: 'white',
                  width: 250
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
              options={prompts.map(o => {
                return {
                  value: o.id,
                  label: o.label
                }
              })}
            />
          </span>
        </div>
        <div style={{display: 'flex'}}>
          <div>Inherit repository review prompts</div>
          <Checkbox
            style={{marginLeft: 10}}
            checked={inheritRepoPrompt}
            onChange={(e) => handleCheckboxSelection(e)}
          />
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
