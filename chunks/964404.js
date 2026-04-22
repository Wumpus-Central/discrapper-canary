"use strict";
n.d(t, { Ay: () => p });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153);
n(677313);
var l = n(185928),
    u = n(355097),
    d = n(652215),
    c = n(698279);
let _ = (window.innerWidth - d.MdR) / 2,
    f = null,
    E = {};
class h extends s.Ay.DeviceSettingsStore {
    static displayName = "UnsyncedUserSettingsStore";
    static persistKey = "UnsyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = a.w.get("UserSettingsStore");
            return (
                a.w.remove("UserSettingsStore"),
                i().pick(
                    e,
                    "dataSavingMode",
                    "videoUploadQuality",
                    "lowQualityImageMode",
                    "useSystemTheme",
                    "expressionPickerWidth",
                    "disableVoiceChannelChangeAlert",
                    "disableHardwareMuteSilenceAlert",
                    "disableHideSelfStreamAndVideoConfirmationAlert",
                    "pushUpsellDismissed",
                    "disableEmbeddedActivityPopOutAlert",
                    "disableActivityHardwareAccelerationPrompt",
                    "disableInviteWithTextChannelActivityLaunch",
                    "disableActivityHostLeftNitroUpsell",
                    "disableCallUserConfirmationPrompt",
                    "disableApplicationSubscriptionCancellationSurvey",
                    "enableAndroidChatListAnimations",
                )
            );
        },
        (e) => {
            delete e.disableVisualRefresh;
        },
    ];
    initialize(e) {
        let t;
        ((E = e ?? {}).darkSidebar =
            E.darkSidebar ??
            ((t = s.Ay.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state), t?.darkSidebar ?? !1)),
            (E.hdrDynamicRange = E.hdrDynamicRange ?? "no-limit");
    }
    getUserAgnosticState() {
        return E;
    }
    get displayCompactAvatars() {
        return E.displayCompactAvatars ?? !1;
    }
    get lowQualityImageMode() {
        return E.lowQualityImageMode ?? !1;
    }
    get videoUploadQuality() {
        return E.videoUploadQuality ?? "standard";
    }
    get dataSavingMode() {
        return E.dataSavingMode ?? E.lowQualityImageMode ?? !1;
    }
    get expressionPickerWidth() {
        return E.expressionPickerWidth ?? c.wp.MIN;
    }
    get messageRequestSidebarWidth() {
        return E.messageRequestSidebarWidth ?? d.ItT;
    }
    get threadSidebarWidth() {
        return E.threadSidebarWidth ?? d.da6;
    }
    get postSidebarWidth() {
        return E.postSidebarWidth ?? _;
    }
    get callChatSidebarWidth() {
        return E.callChatSidebarWidth ?? d.da6;
    }
    get homeSidebarWidth() {
        return E.homeSidebarWidth ?? (null == f && (f = Math.max((window.innerWidth - d.MdR) * 0.4, d.da6)), f);
    }
    get callHeaderHeight() {
        return E.callHeaderHeight;
    }
    get useSystemTheme() {
        return E.useSystemTheme ?? l.Q_.UNSET;
    }
    get activityPanelHeight() {
        return E.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return E.disableVoiceChannelChangeAlert ?? !1;
    }
    get disableHardwareMuteSilenceAlert() {
        return E.disableHardwareMuteSilenceAlert ?? !1;
    }
    get disableEmbeddedActivityPopOutAlert() {
        return E.disableEmbeddedActivityPopOutAlert ?? !1;
    }
    get disableActivityHardwareAccelerationPrompt() {
        return E.disableActivityHardwareAccelerationPrompt ?? !1;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        return E.disableInviteWithTextChannelActivityLaunch ?? !1;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        return E.disableHideSelfStreamAndVideoConfirmationAlert ?? !1;
    }
    get pushUpsellUserSettingsDismissed() {
        return E.pushUpsellDismissed ?? !1;
    }
    get disableActivityHostLeftNitroUpsell() {
        return E.disableActivityHostLeftNitroUpsell ?? !1;
    }
    get disableCallUserConfirmationPrompt() {
        return E.disableCallUserConfirmationPrompt ?? !1;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        return E.disableApplicationSubscriptionCancellationSurvey ?? !1;
    }
    get darkSidebar() {
        return E.darkSidebar ?? !1;
    }
    get saveCameraUploadsToDevice() {
        return E.saveCameraUploadsToDevice ?? !0;
    }
    isVisualRefreshDisabled(e) {
        return E.disableVisualRefresh ?? e;
    }
    get listDensity() {
        return E.listDensity ?? u.YP.COZY;
    }
    get hdrDynamicRange() {
        return E.hdrDynamicRange ?? "no-limit";
    }
}
let p = new h(o.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
        E = { ...E, ...e.settings };
    },
    LOGOUT: function () {
        E = { useSystemTheme: E.useSystemTheme, darkSidebar: E.darkSidebar };
    },
    LOGIN_SUCCESS: function () {
        null == E && (E = {});
    },
    REGISTER_SUCCESS: function () {},
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
        return (E.darkSidebar = !E.darkSidebar), !0;
    },
});
