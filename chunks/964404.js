"use strict";
n.d(t, { Ay: () => E });
var r = n(735438),
    i = n.n(r),
    s = n(311907),
    a = n(506774),
    o = n(73153);
n(677313);
var l = n(185928),
    u = n(355097),
    c = n(652215),
    d = n(698279);
let _ = (window.innerWidth - c.MdR) / 2,
    f = null,
    p = {};
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
        ((p = e ?? {}).darkSidebar =
            p.darkSidebar ??
            ((t = s.Ay.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state), t?.darkSidebar ?? !1)),
            (p.hdrDynamicRange = p.hdrDynamicRange ?? "no-limit");
    }
    getUserAgnosticState() {
        return p;
    }
    get displayCompactAvatars() {
        return p.displayCompactAvatars ?? !1;
    }
    get lowQualityImageMode() {
        return p.lowQualityImageMode ?? !1;
    }
    get videoUploadQuality() {
        return p.videoUploadQuality ?? "standard";
    }
    get dataSavingMode() {
        return p.dataSavingMode ?? p.lowQualityImageMode ?? !1;
    }
    get expressionPickerWidth() {
        return p.expressionPickerWidth ?? d.wp.MIN;
    }
    get messageRequestSidebarWidth() {
        return p.messageRequestSidebarWidth ?? c.ItT;
    }
    get threadSidebarWidth() {
        return p.threadSidebarWidth ?? c.da6;
    }
    get postSidebarWidth() {
        return p.postSidebarWidth ?? _;
    }
    get callChatSidebarWidth() {
        return p.callChatSidebarWidth ?? c.da6;
    }
    get homeSidebarWidth() {
        return p.homeSidebarWidth ?? (null == f && (f = Math.max((window.innerWidth - c.MdR) * 0.4, c.da6)), f);
    }
    get callHeaderHeight() {
        return p.callHeaderHeight;
    }
    get useSystemTheme() {
        return p.useSystemTheme ?? l.Q_.UNSET;
    }
    get activityPanelHeight() {
        return p.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return p.disableVoiceChannelChangeAlert ?? !1;
    }
    get disableHardwareMuteSilenceAlert() {
        return p.disableHardwareMuteSilenceAlert ?? !1;
    }
    get disableEmbeddedActivityPopOutAlert() {
        return p.disableEmbeddedActivityPopOutAlert ?? !1;
    }
    get disableActivityHardwareAccelerationPrompt() {
        return p.disableActivityHardwareAccelerationPrompt ?? !1;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        return p.disableInviteWithTextChannelActivityLaunch ?? !1;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        return p.disableHideSelfStreamAndVideoConfirmationAlert ?? !1;
    }
    get pushUpsellUserSettingsDismissed() {
        return p.pushUpsellDismissed ?? !1;
    }
    get disableActivityHostLeftNitroUpsell() {
        return p.disableActivityHostLeftNitroUpsell ?? !1;
    }
    get disableCallUserConfirmationPrompt() {
        return p.disableCallUserConfirmationPrompt ?? !1;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        return p.disableApplicationSubscriptionCancellationSurvey ?? !1;
    }
    get darkSidebar() {
        return p.darkSidebar ?? !1;
    }
    get saveCameraUploadsToDevice() {
        return p.saveCameraUploadsToDevice ?? !0;
    }
    isVisualRefreshDisabled(e) {
        return p.disableVisualRefresh ?? e;
    }
    get listDensity() {
        return p.listDensity ?? u.YP.COZY;
    }
    get hdrDynamicRange() {
        return p.hdrDynamicRange ?? "no-limit";
    }
}
let E = new h(o.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
        p = { ...p, ...e.settings };
    },
    LOGOUT: function () {
        p = { useSystemTheme: p.useSystemTheme, darkSidebar: p.darkSidebar };
    },
    LOGIN_SUCCESS: function () {
        null == p && (p = {});
    },
    REGISTER_SUCCESS: function () {},
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
        return (p.darkSidebar = !p.darkSidebar), !0;
    },
});
