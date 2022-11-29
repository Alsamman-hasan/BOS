import {
  CSSProperties,
  memo,
  SyntheticEvent,
  useEffect,
  useState
} from "react";
import "./tabs.scss";
import { Tabs as TabsUi, Tab } from "@mui/material";
import { classNames } from 'shared/lib/classNames/classNames';

export interface ITabContent {
  tab: string;
  element: JSX.Element;
}

export interface ITabsProps {
  tabs: ITabContent[];
  defaultTab?: number;
  style?: CSSProperties;
  className?:string;
  classTabs?: string;
  variant?: "fullWidth" | "scrollable" | "standard";
}

export const Tabs = memo<ITabsProps>(({ tabs, defaultTab = 0, className, variant ="fullWidth", classTabs }) => {
  const [activateTab, setActivateTab] = useState(false);
  const [valueTab, setValueTab] = useState(defaultTab);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivateTab(true)
    }, 100)
    return () => {
      clearTimeout(timer);
    }
  }, []);


  const handleChangeTab = (event: SyntheticEvent, newValue: number) => {
    setValueTab(newValue);
  };

  return (
    <div className={classNames("tabs", {}, [className])}>
      <TabsUi
        value={valueTab}
        onChange={handleChangeTab}
        variant={variant}
        className={classTabs}
      >
        {activateTab && (tabs.map(({ tab }) => {
          return (
            <Tab
              key={tab}
              label={tab}
            />
          );
        }))}
      </TabsUi>
      {tabs.map(({ element, tab }, index) => {
        return (
          <div
            key={tab}
            role="tabpanel"
            hidden={valueTab !== index}
            id={`simple-tabpanel-${tab.replace(" ", "")}`}
            className="content"
          >
            {element}
          </div>
        );
      })}
    </div>
  );
});

