"use strict";
n.d(t, { Ay: () => v });
var r = n(735438),
    i = n.n(r),
    a = n(311907),
    s = n(506774),
    o = n(73153);
n(677313), n(743898);
var l = n(185928),
    u = n(652215),
    c = n(698279),
    d = n(815968);
let _ = (window.innerWidth - u.MdR) / 2,
    f = "standard",
    p = null;
function h() {
    return null == p && (p = Math.max((window.innerWidth - u.MdR) * 0.4, u.da6)), p;
}
let m = {};
function g(e) {
    m = { ...m, ...e.settings };
}
function E() {
    m = { useSystemTheme: m.useSystemTheme, darkSidebar: m.darkSidebar };
}
function A() {
    null == m && (m = {});
}
function I() {}
function T() {
    return (m.darkSidebar = !m.darkSidebar), !0;
}
function y() {
    let e = a.Ay.PersistedStore.migrateAndReadStoreState("AccessibilityStore", []).state;
    return e?.darkSidebar ?? !1;
}
class S extends a.Ay.DeviceSettingsStore {
    static displayName = "UnsyncedUserSettingsStore";
    static persistKey = "UnsyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = s.w.get("UserSettingsStore");
            return (
                s.w.remove("UserSettingsStore"),
                i().pick(
                    e,
                    "dataSavingMode",
                    "videoUploadQuality",
                    "lowQualityImageMode",
                    "useSystemTheme",
                    "expressionPickerWidth",
                    "disableVoiceChannelChangeAlert",
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
        ((m = e ?? {}).darkSidebar = m.darkSidebar ?? y()), (m.hdrDynamicRange = m.hdrDynamicRange ?? "no-limit");
    }
    getUserAgnosticState() {
        return m;
    }
    get displayCompactAvatars() {
        return m.displayCompactAvatars ?? !1;
    }
    get lowQualityImageMode() {
        return m.lowQualityImageMode ?? !1;
    }
    get videoUploadQuality() {
        return m.videoUploadQuality ?? f;
    }
    get dataSavingMode() {
        return m.dataSavingMode ?? m.lowQualityImageMode ?? !1;
    }
    get expressionPickerWidth() {
        return m.expressionPickerWidth ?? c.wp.MIN;
    }
    get messageRequestSidebarWidth() {
        return m.messageRequestSidebarWidth ?? u.ItT;
    }
    get threadSidebarWidth() {
        return m.threadSidebarWidth ?? u.da6;
    }
    get postSidebarWidth() {
        return m.postSidebarWidth ?? _;
    }
    get callChatSidebarWidth() {
        return m.callChatSidebarWidth ?? u.da6;
    }
    get homeSidebarWidth() {
        return m.homeSidebarWidth ?? h();
    }
    get callParticipantsSidebarWidth() {
        return m.callParticipantsSidebarWidth ?? 360;
    }
    get callHeaderHeight() {
        return m.callHeaderHeight;
    }
    get useSystemTheme() {
        return m.useSystemTheme ?? l.Q_.UNSET;
    }
    get activityPanelHeight() {
        return m.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return m.disableVoiceChannelChangeAlert ?? !1;
    }
    get disableEmbeddedActivityPopOutAlert() {
        return m.disableEmbeddedActivityPopOutAlert ?? !1;
    }
    get disableActivityHardwareAccelerationPrompt() {
        return m.disableActivityHardwareAccelerationPrompt ?? !1;
    }
    get disableInviteWithTextChannelActivityLaunch() {
        return m.disableInviteWithTextChannelActivityLaunch ?? !1;
    }
    get disableHideSelfStreamAndVideoConfirmationAlert() {
        return m.disableHideSelfStreamAndVideoConfirmationAlert ?? !1;
    }
    get pushUpsellUserSettingsDismissed() {
        return m.pushUpsellDismissed ?? !1;
    }
    get disableActivityHostLeftNitroUpsell() {
        return m.disableActivityHostLeftNitroUpsell ?? !1;
    }
    get disableCallUserConfirmationPrompt() {
        return m.disableCallUserConfirmationPrompt ?? !1;
    }
    get disableApplicationSubscriptionCancellationSurvey() {
        return m.disableApplicationSubscriptionCancellationSurvey ?? !1;
    }
    get darkSidebar() {
        return m.darkSidebar ?? !1;
    }
    get saveCameraUploadsToDevice() {
        return m.saveCameraUploadsToDevice ?? !0;
    }
    isVisualRefreshDisabled(e) {
        return m.disableVisualRefresh ?? e;
    }
    get listDensity() {
        return m.listDensity ?? d.YP.COZY;
    }
    get hdrDynamicRange() {
        return m.hdrDynamicRange ?? "no-limit";
    }
}
let v = new S(o.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: g,
    LOGOUT: E,
    LOGIN_SUCCESS: A,
    REGISTER_SUCCESS: I,
    ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: T,
});
