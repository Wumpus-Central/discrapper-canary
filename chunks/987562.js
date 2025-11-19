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
    a = n(331282),
    o = n(388032);
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
            label: o.intl.string(o.t["bQHhT+"]),
        },
        {
            value: "temporary_break",
            label: o.intl.string(o.t.OuPkvL),
        },
        {
            value: "annoying",
            label: o.intl.string(o.t["3kmAMM"]),
        },
        {
            value: "unsafe",
            label: o.intl.string(o.t.nmW7jO),
        },
        {
            value: "spam",
            label: o.intl.string(o.t.cCPYjk),
        },
        {
            value: "other",
            label: o.intl.string(o.t["7ZIIJ9"]),
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
            label: o.intl.string(o.t["64Oph/"]),
        },
        {
            value: "does_not_achieve_wants",
            label: o.intl.string(o.t["wH5R/r"]),
        },
        {
            value: "hard_to_access",
            label: o.intl.string(o.t["4uZBRp"]),
        },
        {
            value: "something_else",
            label: o.intl.string(o.t.YicFbD),
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
            label: o.intl.string(o.t.IumZmj),
        },
        {
            value: "does_not_achieve_wants",
            label: o.intl.string(o.t.mXkYyW),
        },
        {
            value: "hard_to_access",
            label: o.intl.string(o.t.eg1hVP),
        },
        {
            value: "something_else",
            label: o.intl.string(o.t.WAYoTx),
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
            label: o.intl.string(a.default.ZsnNgz),
        },
        {
            value: "too_much_time",
            label: o.intl.string(a.default.kkKhVJ),
        },
        {
            value: "confusion",
            label: o.intl.string(a.default.bC0QVX),
        },
        {
            value: "something_else",
            label: o.intl.string(o.t.WAYoTx),
        },
    ];
    return e === r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE
        ? [
              ...t,
              {
                  value: "need_documents",
                  label: o.intl.string(a.default["Dl4A+U"]),
              },
              {
                  value: "didnt_work",
                  label: o.intl.string(a.default["8JFGXc"]),
              },
          ]
        : [
              ...t,
              {
                  value: "changed_mind",
                  label: o.intl.string(a.default.eSP1F9),
              },
              {
                  value: "unnecessary",
                  label: o.intl.string(a.default.maxf2S),
              },
          ];
}
var m = (function (e) {
    return (e.GET_STARTED = "age_verification_get_started"), (e.KID_STARTED = "age_verification_kid_started"), e;
})({});
let g = [r.z.AGE_VERIFICATION_SURVEY_MODAL_CLOSE, r.z.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED];
