import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@chakra-ui/button";
import Box from "../../components/Box";
import { BotSelectionProps } from "./types";
import style from "./style/Complete.module.scss";
import { PiCheckBold } from "react-icons/pi";
import Select from 'react-select';
import Checkbox from "../../components/Checkbox";

export default function BotSelection({ isModal, bots, onSuccess }: BotSelectionProps) {
  const { t } = useTranslation();

  const [selectedBot, setSelectedBot] = useState<string>();

  const [inheritRepoBot, setInheritRepoBot] = useState(true);
  

  const handleChange = (selectedValue: any) => {
    console.log({selectedOption: selectedValue.value});
    setSelectedBot(selectedValue.value)
  }

  const handleCheckboxSelection = (e: any) => {
    console.log({checkboxSelection: e.target.checked});
    setInheritRepoBot(e.target.checked);
  }

  const handleCompleteClick = (e: any) => {
    console.log("handleCompleteClick clicked");
    e.preventDefault();
    onSuccess(selectedBot!, inheritRepoBot);
  }


  return (
    <Box className={style.content}>
      <>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <span>{t("Select review bot")}</span>
          <span style={{marginLeft: 10}}>
            <Select
              required={true}
              placeholder={'Select review bot'}
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
              options={bots.map(o => {
                return {
                  value: o.id,
                  label: o.label
                }
              })}
            />
          </span>
        </div>
        <div style={{display: 'flex'}}>
          <div>Inherit repository review bots</div>
          <Checkbox
            style={{marginLeft: 10}}
            checked={inheritRepoBot}
            onChange={(e) => handleCheckboxSelection(e)}
          />
        </div>
        <div className={style.actions}>
          {isModal && (
            <Button isDisabled={!selectedBot} onClick={handleCompleteClick} type="submit" colorScheme="primary" leftIcon={<PiCheckBold />} >
              {t("Complete")}
            </Button>
          )}
        </div>
      </>
    </Box>
  );
}
