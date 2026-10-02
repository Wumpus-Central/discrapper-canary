(n.d(t, { A: () => P }), n(321073));
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
    p = n(260762),
    f = n(861382),
    g = n(522602),
    x = n(234320),
    E = n(215497),
    S = n(834730),
    y = n(939249),
    C = n(780777),
    A = n(424170),
    b = n(274652),
    I = n(31717),
    v = n(914905),
    N = n(650583),
    T = n(375708),
    j = n(40974);
function k(e) {
    let { channelId: t, option: n, keyboardModeEnabled: r } = e,
        a = i.useRef(null),
        [o, u] = i.useState(!1),
        c = g.A.getUpload(t, n.name, I.C.SlashCommand),
        m = i.useRef(null),
        p = n.type === h.n4.ATTACHMENT ? n.fileTypes : void 0,
        {
            allowedExtensions: f,
            typesFormattedString: x,
            validateFilenames: k,
            showInvalidFileTypeAlert: _,
        } = (0, A.M1)(p),
        R = i.useCallback(() => {
            u(!0);
        }, []),
        w = i.useCallback(() => {
            u(!1);
        }, []),
        O = i.useCallback(
            (e, l) => {
                if (f.length > 0 && !k([e.name])) return _();
                let i = { id: n.name, file: e, platform: b.x.WEB, origin: l };
                d.A.setFile({ channelId: t, id: n.name, file: i, draftType: I.C.SlashCommand, allowOptimization: !1 });
            },
            [f.length, k, n.name, t, _],
        ),
        L = i.useCallback(
            (e) => {
                u(!1);
                let t = e.dataTransfer?.files[0];
                null != t && O(t, "drag_drop");
            },
            [O],
        );
    return (i.useEffect(() => {
        let e = m.current;
        return (
            null == c &&
                (e?.addEventListener("dragover", R, !1),
                e?.addEventListener("dragleave", w, !1),
                e?.addEventListener("drop", L, !1)),
            () => {
                (e?.removeEventListener("dragover", R, !1),
                    e?.removeEventListener("dragleave", w, !1),
                    e?.removeEventListener("drop", L, !1));
            }
        );
    }, [c, R, w, L]),
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
                              (0, l.jsx)(C.A, {
                                  ref: a,
                                  onChange: function (e) {
                                      let n = e.currentTarget?.files?.[0];
                                      null != t && null != n && (O(n, "file_picker"), (e.currentTarget.value = ""));
                                  },
                                  multiple: !1,
                                  filters: f.length > 0 ? [{ name: "", extensions: f }] : void 0,
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
var _ = n(652215),
    R = n(714731),
    w = n(969490);
let O = [];
function L(e) {
    let { channelId: t, type: n, ignoreUploadId: r, smallAttachments: S = !1 } = e,
        y = (0, u.bG)([m.Ay], () => m.Ay.keyboardModeEnabled),
        C = (0, p.A)("attachments", o.Gl.HORIZONTAL),
        A = (0, u.bG)([g.A], () => g.A.getUploads(t, n.drafts.type)),
        {
            isApplicationCommand: b,
            commandOptions: I,
            commandOptionStates: N,
        } = (0, u.cf)([f.A], () => {
            let e = f.A.getActiveCommand(t);
            if (null == e) return { isApplicationCommand: !1, commandOptions: O, commandOptionStates: null };
            let n = f.A.getOptionStates(t);
            return { isApplicationCommand: !0, commandOptions: e.options, commandOptionStates: n };
        }),
        T = i.useMemo(() => I?.filter((e) => e.type === h.n4.ATTACHMENT && N?.[e.name]?.hasValue) ?? [], [I, N]),
        [j, L] = i.useState([]);
    i.useEffect(() => {
        function e() {
            d.A.clearAll(t, n.drafts.type);
        }
        return (
            c.h.subscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e),
            () => c.h.unsubscribe("APPLICATION_COMMAND_SET_ACTIVE_COMMAND", e)
        );
    }, [t, n]);
    let P = i.useCallback(() => {
        C.focusFirstVisibleItem();
    }, [C]);
    (0, x.Vo)({ event: _.jej.FOCUS_ATTACHMENT_AREA, handler: P });
    let M = { isApplicationCommand: b, previousUploadOptions: j, uploadOptions: T },
        D = i.useRef(M);
    (i.useEffect(() => {
        D.current = M;
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
                    L(i));
            }
        }, [t, T.length, n]));
    let V = A.filter((e) => e.id !== r);
    return (!b && 0 === V.length) || (b && 0 === T.length)
        ? null
        : (0, l.jsx)(a.hD, {
              navigator: C,
              children: (0, l.jsx)(a.PR, {
                  children: (e) => {
                      let { ref: i, ...r } = e;
                      return (0, l.jsx)("ul", {
                          ref: i,
                          ...r,
                          className: s()(R.I, w.KK),
                          children: b
                              ? T.map((e) => (0, l.jsx)(k, { channelId: t, keyboardModeEnabled: y, option: e }, e.name))
                              : V.map((e) =>
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
let P = i.memo(function (e) {
    let { channelId: t, type: n, canAttachFiles: i, ignoreUploadId: r, smallAttachments: s = !1 } = e;
    return i ? (0, l.jsx)(L, { channelId: t, type: n, ignoreUploadId: r, smallAttachments: s }) : null;
});
