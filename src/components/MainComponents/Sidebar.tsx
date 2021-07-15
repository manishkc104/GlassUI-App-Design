import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import styled from "@emotion/styled";
import { ReactComponent as Icon3D } from "../../assets/icons/ic-3D.svg";
import { ReactComponent as IconUI } from "../../assets/icons/ic-ui-ux.svg";
import { ReactComponent as IconApps } from "../../assets/icons/ic-apps.svg";
import { ReactComponent as IconFont } from "../../assets/icons/ic-fonts.svg";
import { ReactComponent as IconStock } from "../../assets/icons/ic-stock.svg";
import { ReactComponent as IconVideo } from "../../assets/icons/ic-video.svg";
import { ReactComponent as IconUpdate } from "../../assets/icons/ic-update.svg";
import { ReactComponent as IconGraphic } from "../../assets/icons/ic-graphic.svg";
import { ReactComponent as IconBehance } from "../../assets/icons/ic-behance.svg";
import { ReactComponent as IconTutorial } from "../../assets/icons/ic-tutorial.svg";
import { ReactComponent as IconProtfolio } from "../../assets/icons/ic-protfolio.svg";
import { ReactComponent as IconSocialForum } from "../../assets/icons/ic-social-form.svg";
import { ReactComponent as IconPhotography } from "../../assets/icons/ic-photography.svg";
import { ReactComponent as IconIllustration } from "../../assets/icons/ic-illustration.svg";
import SidebarLink from "../SidebarLink";

const sideBarData = [
  {
    categories: "Apps",
    categoriesValue: [
      {
        value: "All Apps",
        icon: <IconApps />,
      },
      {
        value: "Updates",
        icon: <IconUpdate />,
      },
    ],
  },
  {
    categories: "Categories",
    categoriesValue: [
      {
        value: "Photography",
        icon: <IconPhotography />,
      },
      {
        value: "Graphic Design",
        icon: <IconGraphic />,
      },
      {
        value: "Video",
        icon: <IconVideo />,
      },
      {
        value: "Illustrations",
        icon: <IconIllustration />,
      },
      {
        value: "UI/UX",
        icon: <IconUI />,
      },
      {
        value: "3D/AR",
        icon: <Icon3D />,
      },
    ],
  },
  {
    categories: "Fonts",
    categoriesValue: [
      {
        value: "Manage Fonts",
        icon: <IconFont />,
      },
    ],
  },
  {
    categories: "Resource Links",
    categoriesValue: [
      {
        value: "Stock",
        icon: <IconStock />,
      },
      {
        value: "Tutorials",
        icon: <IconTutorial />,
      },
      {
        value: "Protfolio",
        icon: <IconProtfolio />,
      },
      {
        value: "Behance",
        icon: <IconBehance />,
      },
      {
        value: "Social Forum",
        icon: <IconSocialForum />,
      },
    ],
  },
];

const StyledHeading = styled(Text)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #717790c7;
  margin-bottom: 1.4rem;
`;

const Sidebar: React.FC = () => {
  return (
    <Flex
      direction="column"
      padding="2.6rem"
      flexBasis="25rem"
      overflow="auto"
      borderRight="1px solid #71779040"
    >
      {sideBarData.map(({ categories, categoriesValue }) => {
        return (
          <>
            <StyledHeading>{categories}</StyledHeading>
            {categoriesValue.map(({ value, icon }) => (
              <SidebarLink value={value} icon={icon} />
            ))}
          </>
        );
      })}
    </Flex>
  );
};

export default Sidebar;
