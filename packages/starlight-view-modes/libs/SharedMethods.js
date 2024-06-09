import config from "virtual:starlight-view-modes-config";

export function activateZenMode() {
    document.body.classList.add("view-modes-zen-mode");

    if (config.zenModeShowFooter) {
        document.body.classList.add("view-modes-zen-mode-footer-enabled");
    } else {
        document.body.classList.add("view-modes-zen-mode-footer-disabled");
    }

    if (config.zenModeShowHeader) {
        document.body.classList.add("view-modes-zen-mode-header-enabled");
    } else {
        document.body.classList.add("view-modes-zen-mode-header-disabled");
    }

    if (config.zenModeShowSidebar) {
        document.body.classList.add("view-modes-zen-mode-sidebar-enabled");
    } else {
        document.body.classList.add("view-modes-zen-mode-sidebar-disabled");
    }

    if (config.zenModeShowTableOfContents) {
        document.body.classList.add("view-modes-zen-mode-table-of-contents-enabled");
    } else {
        document.body.classList.add("view-modes-zen-mode-table-of-contents-disabled");
    }

    const zenModeOffHeader = document.getElementById("view-modes-zen-mode-off-header");
    if (zenModeOffHeader) zenModeOffHeader.title = "Deactivate Zen Mode";

    const zenModeOffHeaderMobile = document.getElementById("view-modes-zen-mode-off-header-mobile");
    if (zenModeOffHeaderMobile) zenModeOffHeaderMobile.title = "Deactivate Zen Mode";

    sessionStorage.setItem("viewModesZenMode", "true");
}

export function deactivateZenMode() {
    document.body.classList.remove(
        "view-modes-zen-mode",
        "view-modes-zen-mode-footer-enabled",
        "view-modes-zen-mode-footer-disabled",
        "view-modes-zen-mode-header-enabled",
        "view-modes-zen-mode-header-disabled"
    );

    const zenModeOffHeader = document.getElementById("view-modes-zen-mode-off-header");
    if (zenModeOffHeader) zenModeOffHeader.title = "Activate Zen Mode";

    const zenModeOffHeaderMobile = document.getElementById("view-modes-zen-mode-off-header-mobile");
    if (zenModeOffHeaderMobile) zenModeOffHeaderMobile.title = "Activate Zen Mode";

    sessionStorage.removeItem("viewModesZenMode");
}

export function activatePresentationMode() {
    document.body.classList.add("view-modes-presentation-mode");

    sessionStorage.setItem("viewModesPresentationMode", "true");
}

export function deactivatePresentationMode() {
    document.body.classList.remove("view-modes-presentation-mode");
    sessionStorage.removeItem("viewModesPresentationMode");
}

export function deactivateAllModes() {
    deactivateZenMode();
    deactivatePresentationMode();
}
