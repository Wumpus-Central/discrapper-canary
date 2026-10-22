n.d(t, { op: () => E, B0: () => A, _q: () => h });
var i = n(809685),
    r = n(777977),
    a = n(484697);
(n(321073), n(667532));
var s = n(112420),
    l = n(652215);
function o(e) {
    return "string" == typeof e && "" !== e ? e : void 0;
}
let d = {
    [l.e$_.OPEN_CONTEXT_MENU]: (e) =>
        "custom" !== e.args.type
            ? { result: { opened: !0 }, answered: "opened, no selection to make" }
            : {
                  result: { opened: !0, selected_id: null },
                  answered: "dismissed",
                  options: (function e(t) {
                      let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                      if (!Array.isArray(t)) return n;
                      for (let i of t) {
                          if (n.length >= 40) break;
                          if (null == i || "object" != typeof i) continue;
                          let t = o(i.id);
                          (null != t && n.push(t), e(i.items, n));
                      }
                      return n;
                  })(e.args.items),
              },
    [l.e$_.SHOW_CONFIRM_MODAL]: (e) => ({
        result: "confirm" === e.args.type ? { confirmed: !1 } : { acknowledged: !1 },
        answered: "dismissed",
        subject: o(e.args.title),
    }),
    [l.e$_.OPEN_EXTERNAL_LINK]: (e) => ({
        result: { opened: !1 },
        answered: "cancelled \u2014 an agent may not open external links",
        subject: o(e.args.url),
    }),
    [l.e$_.SHARE_CONTENT]: (e) => ({
        result: { success: !1, didCopyLink: !1, didSendMessage: !1 },
        answered: "closed without sharing \u2014 an agent may not send a message for the user",
        subject: o(e.args.preview_title) ?? o(e.args.content),
    }),
    [l.e$_.REQUEST_DEVICE_PERMISSIONS]: (e) => {
        let t = Array.isArray(e.args.permissions) ? e.args.permissions.filter((e) => "string" == typeof e) : [];
        return {
            result: { permissions: t.map((e) => ({ permission: e, state: "denied" })) },
            answered: "denied; an agent may not grant device access",
            options: t,
        };
    },
    [l.e$_.CAPTURE_SCREEN]: () => ({
        result: { status: "permission_denied" },
        answered: "denied; an agent may not capture the screen",
    }),
    [l.e$_.OPEN_USER_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [l.e$_.OPEN_USER_POPOUT]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [l.e$_.OPEN_GAME_PROFILE]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [l.e$_.SHOW_TOOLTIP]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [l.e$_.HIDE_TOOLTIP]: () => ({ result: { hidden: !0 }, answered: "hidden" }),
    [l.e$_.OPEN_MEDIA_VIEWER]: () => ({ result: { opened: !0 }, answered: "opened" }),
    [l.e$_.SHOW_TOAST]: () => ({ result: { shown: !0 }, answered: "shown" }),
    [l.e$_.OPEN_INVITE_DIALOG]: () => ({ result: void 0, answered: "opened" }),
    [l.e$_.OPEN_SHARE_MOMENT_DIALOG]: () => ({ result: void 0, answered: "opened" }),
};
Object.keys(d);
let c = { drain: () => [], end: () => {}, iframeId: null },
    u = [];
function _(e) {
    let t = u.find((t) => t.iframeId === e.iframeId);
    if (null == t) return null;
    let n = d[e.cmd];
    if (null == n) return null;
    let { result: i, answered: r, options: a, subject: s } = n(e);
    return (
        t.recorded.length < 20 &&
            t.recorded.push({
                command: e.cmd,
                answered: r,
                ...(null != a && a.length > 0 ? { options: a } : {}),
                ...(null != s ? { subject: s } : {}),
            }),
        { result: i }
    );
}
function E(e) {
    let t = e.contentWindow;
    if (null == t) return;
    let n = (0, a.lw)(t);
    null != n && ((0, i.ir)(n), (0, r.OR)(n));
}
function A(e) {
    let t = e.contentWindow;
    return null == t ? null : ((0, a.lw)(t) ?? null);
}
function h(e, t) {
    var n = A(e);
    if (null == n) return c;
    let i = { iframeId: n, recorded: [] };
    return (
        t?.beneathBatches === !0 ? u.push(i) : u.unshift(i),
        1 === u.length && (0, s.C)(_),
        {
            iframeId: n,
            drain: () => i.recorded.splice(0, i.recorded.length),
            end: () => {
                let e = u.indexOf(i);
                -1 !== e && (u.splice(e, 1), 0 === u.length && (0, s.C)(null));
            },
        }
    );
}
