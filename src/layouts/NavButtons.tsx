import { Button } from "@mantine/core";
import { useLocation, useNavigate } from "react-router-dom";
import { NAV_ITEMS } from "~/constants";
import type { INavButtonsProps } from "./Layout.model";

export const NavButtons = ({ onItemClick, fullWidth }: INavButtonsProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Button
            key={item.path}
            variant={isActive ? "filled" : "default"}
            fullWidth={fullWidth}
            onClick={() => {
              navigate(item.path);
              onItemClick?.();
            }}
          >
            {item.label}
          </Button>
        );
      })}
    </>
  );
};
