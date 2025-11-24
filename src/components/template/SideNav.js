import React from "react";
import classNames from "classnames";
import { ScrollBar } from "../../components/ui";
import PropTypes from "prop-types";
import {
  SIDE_NAV_WIDTH,
  SIDE_NAV_COLLAPSED_WIDTH,
  NAV_MODE_DARK,
  NAV_MODE_THEMED,
  NAV_MODE_TRANSPARENT,
  SIDE_NAV_CONTENT_GUTTER,
  LOGO_X_GUTTER,
} from "../../constants/theme.constant";
import Logo from "./Logo";
import navigationConfig from "../../configs/navigation.config";
import useResponsive from "../../utils/hooks/useResponsive";
import { useSelector } from "react-redux";
import VerticalMenuContent from "./template/VerticalMenuContent";

const sideNavStyle = {
  width: SIDE_NAV_WIDTH,
  minWidth: SIDE_NAV_WIDTH,
};

const sideNavCollapseStyle = {
  width: SIDE_NAV_COLLAPSED_WIDTH,
  minWidth: SIDE_NAV_COLLAPSED_WIDTH,
};

const SideNav = () => {
  const themeColor = useSelector((state) => state.theme.themeColor);
  const primaryColorLevel = useSelector(
    (state) => state.theme.primaryColorLevel
  );
  const navMode = useSelector((state) => state.theme.navMode);
  const mode = useSelector((state) => state.theme.mode);
  const direction = useSelector((state) => state.theme.direction);
  const currentRouteKey = useSelector(
    (state) => state.base.common.currentRouteKey
  );
  const sideNavCollapse = useSelector(
    (state) => state.theme.layout.sideNavCollapse
  );
  const userAuthority = useSelector((state) => state.auth.user.authority);
  const { navigationConfigs } = useSelector((state) => state.auth.user);

  const { larger } = useResponsive();

  const sideNavColor = () => {
    if (navMode === NAV_MODE_THEMED) {
      return `bg-${themeColor}-${primaryColorLevel} side-nav-${navMode}`;
    }
    return `side-nav-${navMode}`;
  };

  const logoMode = () => {
    if (navMode === NAV_MODE_THEMED) {
      return NAV_MODE_DARK;
    }

    if (navMode === NAV_MODE_TRANSPARENT) {
      return mode;
    }

    return navMode;
  };

  // Merge static config with API config to ensure MTC is included
  const mergeNavigationConfig = () => {
    if (!navigationConfigs || navigationConfigs.length === 0) {
      return navigationConfig;
    }

    // Find if MTC already exists in API config
    const hasMTC = JSON.stringify(navigationConfigs).includes('"key":"mtc"');
    if (hasMTC) {
      return navigationConfigs;
    }

    // Clone the API config to avoid mutation
    const mergedConfig = JSON.parse(JSON.stringify(navigationConfigs));
    
    // Find the "pages" section and "Master PP" item
    const pagesSection = mergedConfig.find(item => item.key === 'pages');
    if (pagesSection && pagesSection.subMenu) {
      const masterPPIndex = pagesSection.subMenu.findIndex(
        item => item.key === 'master.planner'
      );
      
      if (masterPPIndex !== -1) {
        // Check if MTC is already there
        const mtcExists = pagesSection.subMenu.find(item => item.key === 'mtc');
        if (!mtcExists) {
          // Insert MTC after Master PP
          // Use the same authority format as Master PP (strings from constants)
          const mtcItem = {
            key: "mtc",
            path: `/master/mtc`,
            title: "MTC",
            translateKey: "nav.mtc",
            icon: "master",
            type: "item",
            authority: ["super-admin", "admin", "sub-admin"],
            subMenu: [],
          };
          pagesSection.subMenu.splice(masterPPIndex + 1, 0, mtcItem);
        }
      }
    }

    return mergedConfig;
  };

  const finalNavigationTree = mergeNavigationConfig();

  const menuContent = (
    <VerticalMenuContent
      navMode={navMode}
      collapsed={sideNavCollapse}
      navigationTree={finalNavigationTree}
      routeKey={currentRouteKey}
      userAuthority={userAuthority}
      direction={direction}
    />
  );

  return (
    <>
      {larger.md && (
        <div
          style={sideNavCollapse ? sideNavCollapseStyle : sideNavStyle}
          className={classNames(
            "side-nav",
            sideNavColor(),
            !sideNavCollapse && "side-nav-expand"
          )}
        >
          <div className="side-nav-header mb-3 mt-2">
            <Logo
              mode={logoMode()}
              type={sideNavCollapse ? "streamline" : "full"}
              gutter={sideNavCollapse ? SIDE_NAV_CONTENT_GUTTER : LOGO_X_GUTTER}
            />
          </div>
          {sideNavCollapse ? (
            menuContent
          ) : (
            <div className="side-nav-content">
              <ScrollBar autoHide direction={direction}>
                {menuContent}
              </ScrollBar>
            </div>
          )}
        </div>
      )}
    </>
  );
};

SideNav.propTypes = {
  themed: PropTypes.bool,
  darkMode: PropTypes.bool,
  themeColor: PropTypes.string,
};

SideNav.defaultProps = {
  themed: false,
  darkMode: false,
  themeColor: "",
};

export default SideNav;
