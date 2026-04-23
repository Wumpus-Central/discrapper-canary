"use strict";
n.d(t, { Ay: () => f });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(506774),
    o = n(228366);
n(677313);
var l = n(185928),
    d = n(355097),
    _ = n(652215),
    u = n(698279);
let c = (window.innerWidth - _.MdR) / 2,
    E = null,
    h = {};
class m extends s.Ay.DeviceSettingsStore {
    static displayName = "UnsyncedUserSettingsStore";
    static persistKey = "UnsyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = a.w.get("UserSettingsStore");
            return (
                a.w.remove("UserSettingsStore"),
                r().pick(
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
        ((h = e ?? {}).darkSidebar =
            h.darkSidebar ??
            ((t = s.Ay.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state), t?.darkSidebar ?? !1)),
            (h.hdrDynamicRange = h.hdrDynamicRange ?? "no-limit");
    }
    getUserAgnosticState() {
        return h;
    }
    get displayCompactAvatars() {
        return h.displayCompactAvatars ?? !1;
    }
    get lowQualityImageMode() {
        return h.lowQualityImageMode ?? !1;
    }
    get videoUploadQuality() {
        return h.videoUploadQuality ?? "standard";
    }
    get dataSavingMode() {
        return h.dataSavingMode ?? h.lowQualityImageMode ?? !1;
    }
    get expressionPickerWidth() {
        return h.expressionPickerWidth ?? u.wp.MIN;
    }
    get messageRequestSidebarWidth() {
        return h.messageRequestSidebarWidth ?? _.ItT;
    }
    get threadSidebarWidth() {
        return h.threadSidebarWidth ?? _.da6;
    }
    get postSidebarWidth() {
        return h.postSidebarWidth ?? c;
    }
    get callChatSidebarWidth() {
        return h.callChatSidebarWidth ?? _.da6;
    }
    get homeSidebarWidth() {
        return h.homeSidebarWidth ?? (null == E && (E = Math.max((window.innerWidth - _.MdR) * 0.4, _.da6)), E);
    }
    get callHeaderHeight() {
        return h.callHeaderHeight;
    }
    get useSystemTheme() {
        return h.useSystemTheme ?? l.Q_.UNSET;
    }
    get activityPanelHeight() {
        return h.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return h.disableVoiceChannelChangeAlert ?? !1;
    }
    get disableHardwareMuteSilenceAlert() {
        return h.disableHardwareMuteSilenceAlert ?? !1;
    }
    get disableEmbeddedActivityPopOutAlert() {
        return h.disableEmbeddedActivityPopOutAlert ?? !1;
    }
    get disableActivityHardwareAccelerationPrompt() {
        return h.disableActivityHardwareAccelerationPrompt ?? !1;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        return h.disableInviteWithTextChannelActivityLaunch ?? !1;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        return h.disableHideSelfStreamAndVideoConfirmationAlert ?? !1;
    }
    get pushUpsellUserSettingsDismissed() {
        return h.pushUpsellDismissed ?? !1;
    }
    get disableActivityHostLeftNitroUpsell() {
        return h.disableActivityHostLeftNitroUpsell ?? !1;
    }
    get disableCallUserConfirmationPrompt() {
        return h.disableCallUserConfirmationPrompt ?? !1;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        return h.disableApplicationSubscriptionCancellationSurvey ?? !1;
    }
    get darkSidebar() {
        return h.darkSidebar ?? !1;
    }
    get saveCameraUploadsToDevice() {
        return h.saveCameraUploadsToDevice ?? !0;
    }
    isVisualRefreshDisabled(e) {
        return h.disableVisualRefresh ?? e;
    }
    get listDensity() {
        return h.listDensity ?? d.YP.COZY;
    }
    get hdrDynamicRange() {
        return h.hdrDynamicRange ?? "no-limit";
    }
}
let f = new m(o.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
        h = { ...h, ...e.settings };
    },
    LOGOUT: function () {
        h = { useSystemTheme: h.useSystemTheme, darkSidebar: h.darkSidebar };
    },
    LOGIN_SUCCESS: function () {
        null == h && (h = {});
    },
    REGISTER_SUCCESS: function () {},
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
        return (h.darkSidebar = !h.darkSidebar), !0;
    },
});
