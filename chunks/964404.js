var i = n(435558),
    r = n.n(i),
    a = n(855986),
    s = n(506774),
    l = n(73153);
n(677313);
var o = n(185928),
    d = n(355097);
n(652215);
var c = n(698279);
n(276831);
let u = (window.innerWidth - 240) / 2,
    _ = null,
    E = {};
class A extends a.Ay.DeviceSettingsStore {
    static displayName = "UnsyncedUserSettingsStore";
    static persistKey = "UnsyncedUserSettingsStore";
    static migrations = [
        () => {
            let e = s.w.get("UserSettingsStore");
            return (
                s.w.remove("UserSettingsStore"),
                r().pick(
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
        (e) => {
            if (null == e) return e;
            let {
                    allowConjurePictureInPictureOnNavigateAway: t,
                    allowVibegrationsPictureInPictureOnNavigateAway: n,
                    ...i
                } = e,
                r = t ?? n;
            return (null != r && null == i.allowConjureRunInBackground && (i.allowConjureRunInBackground = r), i);
        },
    ];
    initialize(e) {
        (E = e ?? {}).hdrDynamicRange = E.hdrDynamicRange ?? "no-limit";
    }
    getUserAgnosticState() {
        return E;
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
        return E.messageRequestSidebarWidth ?? 650;
    }
    get threadSidebarWidth() {
        return E.threadSidebarWidth ?? 480;
    }
    get postSidebarWidth() {
        return E.postSidebarWidth ?? u;
    }
    get callChatSidebarWidth() {
        return E.callChatSidebarWidth ?? 480;
    }
    get stageAudienceSidebarWidth() {
        return E.stageAudienceSidebarWidth ?? 320;
    }
    get homeSidebarWidth() {
        return E.homeSidebarWidth ?? (null == _ && (_ = Math.max((window.innerWidth - 240) * 0.4, 480)), _);
    }
    get callHeaderHeight() {
        return E.callHeaderHeight;
    }
    get useSystemTheme() {
        return E.useSystemTheme ?? o.Q_.UNSET;
    }
    get activityPanelHeight() {
        return E.activityPanelHeight;
    }
    get disableVoiceChannelChangeAlert() {
        return E.disableVoiceChannelChangeAlert ?? !1;
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
    get allowConjureRunInBackground() {
        return E.allowConjureRunInBackground ?? !0;
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
        return E.listDensity ?? d.YP.COZY;
    }
    get hdrDynamicRange() {
        return E.hdrDynamicRange ?? "no-limit";
    }
    get pauseSelfStreamPreviewWhenUnfocused() {
        return E.pauseSelfStreamPreviewWhenUnfocused ?? !0;
    }
    get videoBackground() {
        return E.videoBackground ?? null;
    }
}
let h = new A(l.h, {
    UNSYNCED_USER_SETTINGS_UPDATE: function (e) {
        E = { ...E, ...e.settings };
    },
    LOGOUT: function () {
        E = { useSystemTheme: E.useSystemTheme };
    },
    LOGIN_SUCCESS: function () {
        null == E && (E = {});
    },
    REGISTER_SUCCESS: function () {},
});
n.d(t, {}, { Ay: h });
