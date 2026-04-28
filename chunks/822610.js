"use strict";
n.d(t, { A: () => O }), n(321073);
var l = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    r = n(837381),
    o = n(741918),
    c = n(17928),
    u = n(228366),
    d = n(608299),
    h = n(155718),
    m = n(775602),
    p = n(260762),
    f = n(861382),
    g = n(522602),
    _ = n(234320),
    x = n(215497),
    C = n(834730),
    A = n(939249),
    E = n(780777),
    I = n(565150),
    v = n(31717),
    y = n(914905),
    b = n(650583),
    S = n(985018),
    N = n(402913);
function j(e) {
    let { channelId: t, option: n, keyboardModeEnabled: s } = e,
        r = i.useRef(null),
        [o, c] = i.useState(!1),
        u = g.A.getUpload(t, n.name, v.C.SlashCommand),
        h = i.useRef(null),
        m = i.useCallback(() => {
            c(!0);
        }, []),
        p = i.useCallback(() => {
            c(!1);
        }, []),
        f = i.useCallback(
            (e) => {
                c(!1);
                let l = { id: n.name, file: e.dataTransfer?.files[0], platform: I.xz.WEB, origin: "drag_drop" };
                d.A.setFile({ channelId: t, id: n.name, file: l, draftType: v.C.SlashCommand, allowOptimization: !1 });
            },
            [t, n],
        );
    return (i.useEffect(() => {
        let e = h.current;
        return (
            null == u &&
                (e?.addEventListener("dragover", m, !1),
                e?.addEventListener("dragleave", p, !1),
                e?.addEventListener("drop", f, !1)),
            () => {
                e?.removeEventListener("dragover", m, !1),
                    e?.removeEventListener("dragleave", p, !1),
                    e?.removeEventListener("drop", f, !1);
            }
        );
    }, [u, m, p, f]),
    null != u)
        ? (0, l.jsx)(y.A, {
              channelId: t,
              upload: u,
              keyboardModeEnabled: s,
              draftType: v.C.SlashCommand,
              label: (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsxs)(C.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, l.jsx)(C.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: u.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, l.jsxs)(x.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: s,
              onKeyDown: (e) => {
                  e.key === b.dh.ENTER && (e.preventDefault(), r.current?.activateUploadDialogue());
              },
              className: a()(N.xd, { [N.LB]: o }),
              draftType: v.C.SlashCommand,
              ref: h,
              children: [
                  (0, l.jsx)("span", { className: a()(N.fS, { [N.Vg]: o }), children: n.displayName }),
                  (0, l.jsx)(A.D, {
                      className: N.uN,
                      onClick: () => r.current?.activateUploadDialogue(),
                      children: (0, l.jsxs)("div", {
                          className: N.wi,
                          children: [
                              (0, l.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: N.H9, alt: "" }),
                              (0, l.jsx)(C.E, {
                                  className: N.L,
                                  variant: "text-sm/normal",
                                  children: S.intl.string(S.t.IJyOUf),
                              }),
                              (0, l.jsx)(E.A, {
                                  ref: r,
                                  onChange: (e) => {
                                      if (null != t && e.currentTarget?.files?.[0] != null) {
                                          let l = {
                                              id: n.name,
                                              file: e.currentTarget.files[0],
                                              platform: I.xz.WEB,
                                              origin: "file_picker",
                                          };
                                          d.A.setFile({
                                              channelId: t,
                                              id: n.name,
                                              file: l,
                                              draftType: v.C.SlashCommand,
                                              allowOptimization: !1,
                                          }),
                                              (e.currentTarget.value = "");
                                      }
                                  },
                                  multiple: !1,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: N.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var T = n(652215),
    w = n(386016),
    R = n(429128);
let L = [];
function k(e) {
    let { channelId: t, type: n, ignoreFile: s, smallAttachments: C = !1 } = e,
        A = (0, c.bG)([m.A], () => m.A.keyboardModeEnabled),
        E = (0, p.A)("attachments", o.Gl.HORIZONTAL),
        I = (0, c.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: v,
            commandOptions: b,
            commandOptionStates: S,
        } = (0, c.cf)([f.A], () => {
            let e = f.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: L, commandOptionStates: null };
            let n = f.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        N = i.useMemo(() => b?.filter((e) => e.type === h.n4.ATTACHMENT && S?.[e.name]?.hasValue) ?? [], [b, S]),
        [k, O] = i.useState([]);
    i.useEffect(() => {
        let e = () => {
            d.A.clearAll(t, n.drafts.type);
        };
        return (
            u.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => u.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let M = i.useCallback(() => {
        E.focusFirstVisibleItem();
    }, [E]);
    (0, _.Vo)({ event: T.jej.FOCUS_ATTACHMENT_AREA, handler: M });
    let P = { isApplicationCommand: v, previousUploadOptions: k, uploadOptions: N },
        D = i.useRef(P);
    i.useEffect(() => {
        D.current = P;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: l, uploadOptions: i } = D.current;
            if (e) {
                let e = [];
                l.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    O(i);
            }
        }, [t, N.length, n]);
    let U = I.filter((e) => e.filename !== s);
    return (!v && 0 === U.length) || (v && 0 === N.length)
        ? null
        : (0, l.jsx)(r.hD, {
              navigator: E,
              children: (0, l.jsx)(r.PR, {
                  children: (e) => {
                      let { ref: i, ...s } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...s,
                          className: a()(w.I, R.KK),
                          children: v
                              ? N.map((e) => (0, l.jsx)(j, { channelId: t, keyboardModeEnabled: A, option: e }, e.name))
                              : U.map((e) =>
                                    (0, l.jsx)(
                                        y.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: A,
                                            clip: e.clip,
                                            size: C ? x.L.SMALL : x.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let O = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreFile: s, smallAttachments: a = !1 } = e;
    return i ? (0, l.jsx)(k, { channelId: t, type: n, ignoreFile: s, smallAttachments: a }) : null;
});
