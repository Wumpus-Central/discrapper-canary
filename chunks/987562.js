n.d(t, {
    CE: () => d,
    F5: () => u,
    L$: () => m,
    Me: () => _,
    TL: () => c,
    XL: () => f,
    YA: () => l,
    ny: () => h,
    os: () => g,
    pv: () => s,
    wO: () => p,
}),
    n(388685);
var r = n(704215),
    i = n(70956),
    o = n(565287),
    a = n(388032);
let s = 6 * i.Z.Millis.DAYS_30;
var l = (function (e) {
    return (
        (e.TOO_MANY_NOTIFICATIONS = "too_many_notifications"),
        (e.TEMPORARY_BREAK = "temporary_break"),
        (e.ANNOYING = "annoying"),
        (e.UNSAFE = "unsafe"),
        (e.SPAM = "spam"),
        (e.OTHER = "other"),
        e
    );
})({});
function c() {
    return [
        {
            value: "too_many_notifications",
            label: a.intl.string(a.t.bQHhT0),
        },
        {
            value: "temporary_break",
            label: a.intl.string(a.t.OuPkvL),
        },
        {
            value: "annoying",
            label: a.intl.string(a.t["3kmAMD"]),
        },
        {
            value: "unsafe",
            label: a.intl.string(a.t.nmW7jI),
        },
        {
            value: "spam",
            label: a.intl.string(a.t.cCPYjo),
        },
        {
            value: "other",
            label: a.intl.string(a.t["7ZIIJy"]),
        },
    ];
}
var u = (function (e) {
    return (
        (e.CONFUSION = "confusion"),
        (e.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (e.HARD_TO_ACCESS = "hard_to_access"),
        (e.SOMETHING_ELSE = "something_else"),
        e
    );
})({});
function d() {
    return [
        {
            value: "confusion",
            label: a.intl.string(a.t["64Oph4"]),
        },
        {
            value: "does_not_achieve_wants",
            label: a.intl.string(a.t["wH5R/v"]),
        },
        {
            value: "hard_to_access",
            label: a.intl.string(a.t["4uZBRk"]),
        },
        {
            value: "something_else",
            label: a.intl.string(a.t.YicFbG),
        },
    ];
}
var f = (function (e) {
    return (
        (e.CONFUSION = "confusion"),
        (e.DOES_NOT_ACHIEVE_WANTS = "does_not_achieve_wants"),
        (e.HARD_TO_ACCESS = "hard_to_access"),
        (e.SOMETHING_ELSE = "something_else"),
        e
    );
})({});
function _() {
    return [
        {
            value: "confusion",
            label: a.intl.string(a.t.IumZmp),
        },
        {
            value: "does_not_achieve_wants",
            label: a.intl.string(a.t.mXkYyc),
        },
        {
            value: "hard_to_access",
            label: a.intl.string(a.t.eg1hVF),
        },
        {
            value: "something_else",
            label: a.intl.string(a.t.WAYoT0),
        },
    ];
}
var p = (function (e) {
    return (
        (e.PID_CONCERN = "pid_concern"),
        (e.TOO_MUCH_TIME = "too_much_time"),
        (e.CONFUSION = "confusion"),
        (e.CHANGED_MIND = "changed_mind"),
        (e.UNNECESSARY = "unnecessary"),
        (e.NEED_DOCUMENTS = "need_documents"),
        (e.DIDNT_WORK = "didnt_work"),
        (e.SOMETHING_ELSE = "something_else"),
        e
    );
})({});
function h(e) {
    let t = [
        {
            value: "pid_concern",
            label: a.intl.string(o.default.ZsnNg4),
        },
        {
            value: "too_much_time",
            label: a.intl.string(o.default.kkKhVF),
        },
        {
            value: "confusion",
            label: a.intl.string(o.default.bC0QVV),
        },
        {
            value: "something_else",
            label: a.intl.string(a.t.WAYoT0),
        },
    ];
    return e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE
        ? [
              ...t,
              {
                  value: "need_documents",
                  label: a.intl.string(o.default["Dl4A+f"]),
              },
              {
                  value: "didnt_work",
                  label: a.intl.string(o.default["8JFGXV"]),
              },
          ]
        : [
              ...t,
              {
                  value: "changed_mind",
                  label: a.intl.string(o.default.eSP1Fx),
              },
              {
                  value: "unnecessary",
                  label: a.intl.string(o.default.maxf2d),
              },
          ];
}
var m = (function (e) {
    return (e.GET_STARTED = "age_verification_get_started"), (e.KID_STARTED = "age_verification_kid_started"), e;
})({});
let g = [r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE, r.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED];
