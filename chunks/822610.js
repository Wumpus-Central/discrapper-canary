(n.d(t, { A: () => L }), n(321073));
var l = n(477900),
    i = n(582128),
    r = n(503698),
    s = n.n(r),
    a = n(837381),
    o = n(741918),
    u = n(17928),
    c = n(73153),
    d = n(608299),
    h = n(155718),
    m = n(775602),
    f = n(260762),
    p = n(861382),
    g = n(522602),
    x = n(234320),
    E = n(215497),
    S = n(834730),
    y = n(939249),
    A = n(780777),
    C = n(424170),
    b = n(274652),
    I = n(31717),
    v = n(914905),
    N = n(650583),
    T = n(105292),
    j = n(40974);
function _(e) {
    let { channelId: t, option: n, keyboardModeEnabled: r } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = g.A.getUpload(t, n.name, I.C.SlashCommand),
        m = i.useRef(null),
        f = n.type === h.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: p,
            typesFormattedString: x,
            validateFilenames: _,
            showInvalidFileTypeAlert: k,
        } = (0, C.M1)(f),
        R = i.useCallback(() => {
            u(!0);
        }, []),
        O = i.useCallback(() => {
            u(!1);
        }, []),
        w = i.useCallback(
            (e, l) => {
                if (p.length > 0 && !_([e.name])) return k();
                let i = { id: n.name, file: e, platform: b.x.WEB, origin: l };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: I.C.SlashCommand, allowOptimization: !1 });
            },
            [p.length, _, n.name, t, k],
        ),
        M = i.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && w(t, "drag_drop");
            },
            [w],
        );
    return (i.useEffect(() => {
        let e = m.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", R, !1),
                e?.addEventListener("dragleave", O, !1),
                e?.addEventListener("drop", M, !1)),
            () => {
                (e?.removeEventListener("dragover", R, !1),
                    e?.removeEventListener("dragleave", O, !1),
                    e?.removeEventListener("drop", M, !1));
            }
        );
    }, [c, R, O, M]),
    null != c)
        ? (0, l.jsx)(v.A, {
              channelId: t,
              upload: c,
              keyboardModeEnabled: r,
              draftType: I.C.SlashCommand,
              label: (0, l.jsxs)(i.Fragment, {
                  children: [
                      (0, l.jsxs)(S.E, { tag: "span", variant: "text-md/normal", children: [n.displayName, ": "] }),
                      (0, l.jsx)(S.E, {
                          tag: "span",
                          variant: "text-md/normal",
                          color: "text-brand",
                          children: c.filename,
                      }),
                  ],
              }),
              canEdit: !1,
          })
        : (0, l.jsxs)(E.A, {
              id: n.name,
              channelId: t,
              keyboardModeEnabled: r,
              onKeyDown: function (e) {
                  e.key === N.dh.ENTER && (e.preventDefault(), a.current?.activateUploadDialogue());
              },
              className: s()(j.xd, { [j.LB]: o }),
              draftType: I.C.SlashCommand,
              ref: m,
              children: [
                  (0, l.jsx)("span", { className: s()(j.fS, { [j.Vg]: o }), children: n.displayName }),
                  (0, l.jsx)(y.D, {
                      className: j.uN,
                      onClick: () => a.current?.activateUploadDialogue(),
                      children: (0, l.jsxs)("div", {
                          className: j.wi,
                          children: [
                              (0, l.jsx)("img", { src: "/assets/27c3681a77f271c6.svg", className: j.H9, alt: "" }),
                              (0, l.jsx)(S.E, {
                                  className: j.L,
                                  variant: "text-sm/normal",
                                  children:
                                      null != x ? T.intl.format(T.t.JJzx48, { types: x }) : T.intl.string(T.t.IJyOUf),
                              }),
                              (0, l.jsx)(A.A, {
                                  ref: a,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (w(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: p.length > 0 ? [{ name: "", extensions: p }] : void 0,
                                  tabIndex: -1,
                                  "aria-hidden": !0,
                                  className: j.Fg,
                              }),
                          ],
                      }),
                  }),
              ],
          });
}
var k = n(652215),
    R = n(714731),
    O = n(969490);
let w = [];
function M(e) {
    let { channelId: t, type: n, ignoreUploadId: r, smallAttachments: S = !1 } = e,
        y = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
        A = (0, f.A)("attachments", o.Gl.HORIZONTAL),
        C = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: b,
            commandOptions: I,
            commandOptionStates: N,
        } = (0, u.cf)([p.A], () => {
            let e = p.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: w, commandOptionStates: null };
            let n = p.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        T = i.useMemo(() => I?.filter((e) => e.type === h.n4.ATTACHMENT && N?.[e.name]?.hasValue) ?? [], [I, N]),
        [j, M] = i.useState([]);
    i.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let L = i.useCallback(() => {
        A.focusFirstVisibleItem();
    }, [A]);
    (0, x.Vo)({ event: k.jej.FOCUS_ATTACHMENT_AREA, handler: L });
    let P = { isApplicationCommand: b, previousUploadOptions: j, uploadOptions: T },
        D = i.useRef(P);
    (i.useEffect(() => {
        D.current = P;
    }),
        i.useEffect(() => {
            let { isApplicationCommand: e, previousUploadOptions: l, uploadOptions: i } = D.current;
            if (e) {
                let e = [];
                (l.forEach((t) => {
                    i.some((e) => t.name === e.name) || e.push(t);
                }),
                    e.forEach((e) => {
                        d.A.remove(t, e.name, n.drafts.type);
                    }),
                    M(i));
            }
        }, [t, T.length, n]));
    let U = C.filter((e) => e.id !== r);
    return (!b && 0 === U.length) || (b && 0 === T.length)
        ? null
        : (0, l.jsx)(a.hD, {
              navigator: A,
              children: (0, l.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...r } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...r,
                          className: s()(R.I, O.KK),
                          children: b
                              ? T.map((e) => (0, l.jsx)(_, { channelId: t, keyboardModeEnabled: y, option: e }, e.name))
                              : U.map((e) =>
                                    (0, l.jsx)(
                                        v.A,
                                        {
                                            channelId: t,
                                            draftType: n.drafts.type,
                                            upload: e,
                                            keyboardModeEnabled: y,
                                            clip: e.clip,
                                            size: S ? E.L.SMALL : E.L.MEDIUM,
                                        },
                                        e.id,
                                    ),
                                ),
                      });
                  },
              }),
          });
}
let L = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreUploadId: r, smallAttachments: s = !1 } = e;
    return i ? (0, l.jsx)(M, { channelId: t, type: n, ignoreUploadId: r, smallAttachments: s }) : null;
});
