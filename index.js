const themeSlots = [
    "--AccentLines: #0086f4;",
    "--AccentText: #0078d7;",
    "--BackgroundOverlay: rgba(255, 255, 255, 0.85);",
    "--BodyText: #333333;",
    "--ButtonBackground: #f8f8f8;",
    "--ButtonBorder: #a6a6a6;",
    "--ButtonDisabledBackground: #f8f8f8;",
    "--ButtonDisabledBorder: #eaeaea;",
    "--ButtonDisabledText: #a6a6a6;",
    "--ButtonGlyph: #666666;",
    "--ButtonGlyphActive: #333333;",
    "--ButtonGlyphDisabled: #c8c8c8;",
    "--ButtonHoverBackground: #e1f2ff;",
    "--ButtonHoverBorder: #c4e4ff;",
    "--ButtonPressedBackground: #c4e4ff;",
    "--ButtonPressedBorder: #0086f4;",
    "--ButtonText: #333333;",
    "--CommandLinks: #666666;",
    "--CommandLinksDisabled: #a6a6a6;",
    "--CommandLinksHover: #0078d7;",
    "--CommandLinksPressed: #004176;",
    "--CommandLinksSecondary: #212121;",
    "--ContentAccent1: #0078d7;",
    "--DialogBorder: #f4f4f4;",
    "--DisabledBackground: #f8f8f8;",
    "--DisabledLines: #eaeaea;",
    "--DisabledText: #a6a6a6;",
    "--EmphasisBackground: #0078d7;",
    "--EmphasisBorder: #005296;",
    "--EmphasisHoverBackground: #005296;",
    "--EmphasisHoverBorder: #004176;",
    "--EmphasisText: #ffffff;",
    "--FooterBackground: rgba(255, 255, 255, 0.85);",
    "--HeaderAccentLines: #0086f4;",
    "--HeaderBackground: rgba(255, 255, 255, 0.85);",
    "--HeaderDisableText: #a6a6a6;",
    "--HeaderDisabledBackground: #f8f8f8;",
    "--HeaderDisabledLines: #eaeaea;",
    "--HeaderLines: #a6a6a6;",
    "--HeaderNavigationHoverText: #0078d7;",
    "--HeaderNavigationPressedText: #004176;",
    "--HeaderNavigationSelectedText: #0078d7;",
    "--HeaderNavigationText: #666666;",
    "--HeaderSiteTitle: #212121;",
    "--HeaderStrongLines: #c4e4ff;",
    "--HeaderSubtleLines: #c8c8c8;",
    "--HeaderText: #333333;",
    "--HoverBackground: rgba(225, 242, 255, 0.50);",
    "--Hyperlink: #0078d7;",
    "--HyperlinkActive: #004176;",
    "--Hyperlinkfollowed: #004176;",
    "--Lines: #a6a6a6;",
    "--Navigation: #666666;",
    "--NavigationAccent: #0078d7;",
    "--NavigationHover: #0078d7;",
    "--NavigationHoverBackground: rgba(225, 242, 255, 0.50);",
    "--NavigationPressed: #004176;",
    "--NavigationSelectedBackground: rgba(234, 234, 234, 0.78);",
    "--PageBackground: #ffffff;",
    "--RowAccent: #0078d7;",
    "--SelectionBackground: rgba(196, 228, 255, 0.50);",
    "--SiteTitle: #212121;",
    "--StrongBodyText: #212121;",
    "--StrongLines: #c4e4ff;",
    "--SubtleEmphasisBackground: #f4f4f4;",
    "--SubtleEmphasisCommandLinks: #212121;",
    "--SubtleEmphasisText: #666666;",
    "--SubtleLines: #c8c8c8;",
    "--SuiteBarBackground: #0078d7;",
    "--SuiteBarHoverBackground: #83c7ff;",
    "--SuiteBarHoverText: #c4e4ff;",
    "--SuiteBarText: #ffffff;",
    "--TileBackgroundOverlay: rgba(0, 0, 0, 0.50);",
    "--TileText: #ffffff;",
    "--TopBarBackground: rgba(234, 234, 234, 0.78);",
    "--TopBarHoverText: #333333;",
    "--TopBarPressedText: #004176;",
    "--TopBarText: #666666;",
    "--WebPartHeading: #333333;",
    "--accent: #8764b8;",
    "--backgroundImageUri: none;",
    "--backgroundOverlay: rgba(255, 255, 255, 0.85);",
    "--black: #000000;",
    "--blackTranslucent40: rgba(0,0,0,.4);",
    "--blockingBackground: rgba(234, 67, 0, .2);",
    "--blue: #0078d4;",
    "--blueDark: #002050;",
    "--blueLight: #00bcf2;",
    "--blueMid: #00188f;",
    "--bodyBackground: #ffffff;",
    "--bodyDivider: #c8c8c8;",
    "--bodyFrameBackground: #ffffff;",
    "--bodyFrameDivider: #eaeaea;",
    "--bodySubtext: #666666;",
    "--bodyText: #333333;",
    "--bodyTextChecked: #000000;",
    "--buttonBackground: #f4f4f4;",
    "--buttonBackgroundChecked: #c8c8c8;",
    "--buttonBackgroundCheckedHovered: #eaeaea;",
    "--buttonBackgroundHovered: #eaeaea;",
    "--buttonBorder: transparent;",
    "--buttonText: #333333;",
    "--buttonTextChecked: #212121;",
    "--buttonTextCheckedHovered: #000000;",
    "--buttonTextHovered: #000000;",
    "--dialogBorder: #f4f4f4;",
    "--disabledBackground: #f4f4f4;",
    "--disabledBodyText: #c8c8c8;",
    "--disabledSubtext: #d0d0d0;",
    "--disabledText: #a6a6a6;",
    "--errorBackground: rgba(232, 17, 35, .2);",
    "--errorText: #a80000;",
    "--focusBorder: #000000;",
    "--green: #107c10;",
    "--greenDark: #004b1c;",
    "--greenLight: #bad80a;",
    "--inputBackground: #ffffff;",
    "--inputBackgroundChecked: #0078d7;",
    "--inputBackgroundCheckedHovered: #006ac1;",
    "--inputBorder: #a6a6a6;",
    "--inputBorderHovered: #212121;",
    "--inputFocusBorderAlt: #0078d7;",
    "--inputForegroundChecked: #ffffff;",
    "--inputPlaceholderText: #666666;",
    "--link: #0078d7;",
    "--linkHovered: #004176;",
    "--listBackground: #ffffff;",
    "--listHeaderBackgroundHovered: #f4f4f4;",
    "--listHeaderBackgroundPressed: #eaeaea;",
    "--listItemBackgroundChecked: #eaeaea;",
    "--listItemBackgroundCheckedHovered: #dadada;",
    "--listItemBackgroundHovered: #f4f4f4;",
    "--listText: #333333;",
    "--listTextColor: #333333;",
    "--magenta: #b4009e;",
    "--magentaDark: #5c005c;",
    "--magentaLight: #e3008c;",
    "--menuHeader: #0078d7;",
    "--menuIcon: #0078d7;",
    "--menuItemBackgroundChecked: #eaeaea;",
    "--menuItemBackgroundHovered: #f4f4f4;",
    "--neutralDark: #212121;",
    "--neutralLight: #eaeaea;",
    "--neutralLighter: #f4f4f4;",
    "--neutralLighterAlt: #f8f8f8;",
    "--neutralPrimary: #333333;",
    "--neutralPrimaryAlt: #3c3c3c;",
    "--neutralQuaternary: #d0d0d0;",
    "--neutralQuaternaryAlt: #dadada;",
    "--neutralSecondary: #666666;",
    "--neutralTertiary: #a6a6a6;",
    "--neutralTertiaryAlt: #c8c8c8;",
    "--orange: #d83b01;",
    "--orangeLight: #ea4300;",
    "--orangeLighter: #ff8c00;",
    "--primaryBackground: #ffffff;",
    "--primaryText: #333333;",
    "--purple: #5c2d91;",
    "--purpleDark: #32145a;",
    "--purpleLight: #b4a0ff;",
    "--red: #e81123;",
    "--redDark: #a80000;",
    "--smallInputBorder: #666666;",
    "--successBackground: rgba(186, 216, 10, .2);",
    "--suiteBarBackground: #0078d7;",
    "--suiteBarText: #ffffff;",
    "--teal: #008272;",
    "--tealDark: #004b50;",
    "--tealLight: #00b294;",
    "--themeAccent: #0078d7;",
    "--themeAccentTranslucent10: rgba(0, 120, 215, 0.10);",
    "--themeDark: #005296;",
    "--themeDarkAlt: #006ac1;",
    "--themeDarker: #004176;",
    "--themeLight: #c4e4ff;",
    "--themeLightAlt: #89cbff;",
    "--themeLighter: #e1f2ff;",
    "--themeLighterAlt: #f0f8ff;",
    "--themePrimary: #0078d7;",
    "--themeSecondary: #0086f4;",
    "--themeTertiary: #83c7ff;",
    "--themeTertiaryAlt: #89cbff;",
    "--topBarBackground: rgba(234, 234, 234, 0.78);",
    "--topBarHoverText: #333333;",
    "--topBarText: #666666;",
    "--warningBackground: rgba(255, 185, 0, .2);",
    "--warningHighlight: #ffb900;",
    "--warningText: #333333;",
    "--white: #ffffff;",
    "--whiteTranslucent40: rgba(255, 255, 255, 0.40);",
    "--yellow: #ffb900;",
    "--yellowLight: #fff100;"
]
const cssVarThemeID = "spfxCSSVarsThemeID";
const themeState = "__themeState__";

const uiFabricCSS = () => {

    createCSSVariables: () => {
        let themeCache = null,
            allVariables = [];

        if (document.getElementById(cssVarThemeID)) {
            return;
        }

        if (themeState in window) {

            themeCache = window[themeState];

            let keys = Object.keys(themeCache.theme);

            keys.forEach(element => {
                allVariables.push("    --" + element + ": " + themeCache.theme[element] + ";");
            });

        } else {

            allVariables = themeSlots;

        }

        var includeInRoot = `:root{
        content: 'hello world';
        ${allVariables.sort().join('\r\n')}
    }`;

        let styleSheetFragment = document.createElement('style');
        styleSheetFragment.id = cssVarThemeID;
        styleSheetFragment.innerHTML = includeInRoot;
        document.head.appendChild(styleSheetFragment);

    }

};

module.exports = uiFabricCSS;
module.exports = uiFabricCSS.createCSSVariables;