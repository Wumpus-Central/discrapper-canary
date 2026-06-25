"use strict";
n.d(t, { A: () => x }), n(321073);
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(837381),
    l = n(741918),
    u = n(17928),
    c = n(228366),
    d = n(608299),
    _ = n(155718),
    h = n(775602),
    f = n(260762),
    p = n(861382),
    E = n(522602),
    m = n(11939),
    g = n(215497),
    A = n(834730),
    I = n(939249),
    T = n(780777),
    S = n(565150),
    y = n(424170),
    C = n(31717),
    N = n(914905),
    v = n(650583),
    R = n(375708),
    O = n(53089);
function b(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        o = r.useRef(null),
        [l, u] = r.useState(!1),
        c = E.A.getUpload(t, n.name, C.C.SlashCommand),
        h = r.useRef(null),
        f = n.type === _.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: p,
            typesFormattedString: m,
            validateFilenames: b,
            showInvalidFileTypeAlert: D,
        } = (0, y.M1)(f),
        L = r.useCallback(() => {
            u(!0);
        }, []),
        w = r.useCallback(() => {
            u(!1);
        }, []),
        M = r.useCallback(
            (e, i) => {
                if (p.length > 0 && !b([e.name])) return D();
                let r = { id: n.name, file: e, platform: S.xz.WEB, origin: i };
                d.A.setFile({ channelId: t, id: n.name, file: r, draftType: C.C.SlashCommand, allowOptimization: !1 });
            },
            [p.length, b, n.name, t, D],
        ),
        P = r.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && M(t, "drag_drop");
            },
            [M],
        );
    return (r.useEffect(() => {
        let e = h.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", L, !1),
                e?.addEventListener("dragleave", w, !1),
                e?.addEventListener("drop", P, !1)),
            () => {
                e?.removeEventListener("dragover", L, !1),
                    e?.removeEventListener("dragleave", w, !1),
                    e?.removeEventListener("drop", P, !1);
            }
        );
    }, [c, L, w, P]),
    null != c)
        ? (0, i.jsx)(N.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: s,
              draftType: C.C.SlashCommand,
              label: (0, i.jsxs)(r.Fragment, {
                  children: [
                      (0, i.jsxs)(A.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, i.jsx)(A.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, i.jsxs)(g.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: function (e) {
                  e.key === v.dh.ENTER && (e.preventDefault(), o.current?.activateUploadDialogue());
              },
              className: a()(O.xd, { [O.LB]: l }),
              draftType: C.C.SlashCommand,
              ref: h,
              children: [
                  (0, i.jsx)("span", { className: a()(O.fS, { [O.Vg]: l }), children: n.displayName }),
                  (0, i.jsx)(I.D, {
                      className: O.uN,
                      onClick: () => o.current?.activateUploadDialogue(),
                      children: (0, i.jsxs)("div", {
                          className: O.wi,
                          children: [
                              (0, i.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: O.H9, alt: "" }),
                              (0, i.jsx)(A.E, {
                                  className: O.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != m ? R.intl.format(R.t.JJzx48, { types: m }) : R.intl.string(R.t.IJyOUf),
                              }),
                              (0, i.jsx)(T.A, {
                                  ref: o,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (M(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: p.length > 0 ? [{ name: "", extensions: p }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: O.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var D = n(652215),
    L = n(820896),
    w = n(134536);
let M = [];
function P(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: A = !1 } = e,
        I = (0, u.bG)([h.Ay], () => h.Ay.keyboardModeEnabled),
        T = (0, f.A)("attachments", l.Gl.HORIZONTAL),
        S = (0, u.bG)([E.A], () => E.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: y,
            commandOptions: C,
            commandOptionStates: v,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: M, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        R = r.useMemo(() => C?.filter((e) => e.type === _.n4.ATTACHMENT && v?.[e.name]?.hasValue) ?? [], [C, v]),
        [O, P] = r.useState([]);
    r.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let x = r.useCallback(() => {
        T.focusFirstVisibleItem();
    }, [T]);
    (0, m.Vo)({ event: D.jej.FOCUS_ATTACHMENT_AREA, handler: x });
    let k = { isApplicationCommand: y, previousUploadOptions: O, uploadOptions: R },
        U = r.useRef(k);
    r.useEffect(() => {
        U.current = k;
    }),
        r.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: i, uploadOptions: r } = U.current;
            if (e) {
                let e = [];
                i.forEach((t) => {
                    r.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    P(r);
            }
        }, [t, R.length, n]);
    let G = S.filter((e) => e.filename !== s);
    return (!y && 0 === G.length) || (y && 0 === R.length)
        ? null
        : (0, i.jsx)(o.hD, {
              navigator: T,
              children: (0, i.jsx)(o.PR, {
                  children: (e) => {
                      let { ref: r, ...s } = e;
                      return (0, i.jsx)("ul", {
                          ref: r,
                          ...s,
                          className: a()(L.I, w.KK),
                          children: y
                              ? R.map((e) => (0, i.jsx)(b, { channelId: t, keyboardModeEnabled: I, option: e }, e.name))
                              : G.map((e) =>
                                    (0, i.jsx)(
                                        N.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: I,
                                            clip: e.clip,
                                            size: A ? g.L.SMALL : g.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let x = r.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: r, ignoreFile: s, smallAttachments: a = !1 } = e;
    return r ? (0, i.jsx)(P, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
});
