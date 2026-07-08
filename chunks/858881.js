i.d(t, { t: () => c });
var r = i(248702),
    n = i(517e3),
    o = i(288552),
    a = i(578097),
    s = (0, r.x)(null);
function l() {
    let e = (0, r.g)(s);
    if (!e) throw Error("Modal compound components must be used within Modal.Root");
    return e;
}
var c = {
    Root: function ({
        open: e,
        children: t,
        onOpenChange: i,
        dismissible: o = !0,
        portalContainer: l,
        class: c,
        hasBackdrop: d = !0,
        manageInitialFocus: u = !0,
        returnFocusRef: h,
    }) {
        let p = (0, a.a)(e, l ?? void 0),
            [f, m] = (0, r.p)(!1),
            g = (0, r.l)(null),
            v = (0, r.h)(() => {
                o && i?.(!1);
            }, [o, i]),
            C = (0, r.d)(() => ({ setHasDescription: m, dismissible: o, requestClose: v }), [o, v]),
            y = e && !!p;
        return (
            (0, a.n)(e),
            (0, a.r)(e, o, v),
            (0, a.i)(y, g, u, h),
            (0, a.o)(y, g),
            p && e
                ? (0, r.r)(
                      (0, r.v)(s.Provider, {
                          value: C,
                          children: (0, r.v)("div", {
                              class: (0, n.n)("IncodeModalRoot", c),
                              "data-incode-modal": "",
                              children: [
                                  d &&
                                      (0, r.v)("div", {
                                          class: "IncodeModalBackdrop",
                                          "aria-hidden": "true",
                                          onMouseDown: () => {
                                              v();
                                          },
                                      }),
                                  (0, r.v)("div", {
                                      ref: g,
                                      class: "IncodeModalDialog",
                                      role: "dialog",
                                      "aria-modal": "true",
                                      "aria-labelledby": "incode-modal-title",
                                      "aria-describedby": f ? "incode-modal-description" : void 0,
                                      tabIndex: -1,
                                      onMouseDown: (e) => {
                                          e.stopPropagation();
                                      },
                                      children: t,
                                  }),
                              ],
                          }),
                      }),
                      p,
                  )
                : null
        );
    },
    Content: function ({ children: e, class: t }) {
        return (0, r.v)("div", { class: (0, n.n)("IncodeModalContent", t), children: e });
    },
    Close: function ({ "aria-label": e = "Close", title: t = "Close", class: i, onClick: a }) {
        let { dismissible: s, requestClose: c } = l();
        if (!s) return null;
        let d = async () => {
            a && (await a()), c();
        };
        return (0, r.v)("button", {
            type: "button",
            class: (0, n.n)("IncodeModalClose", i),
            "aria-label": e,
            title: t,
            onClick: d,
            children: (0, r.v)(o.o, { height: 32, width: 32, fillColor: "var(--icon-neutral-300)" }),
        });
    },
    Icon: function ({ children: e, class: t }) {
        return (0, r.v)("div", { class: (0, n.n)("IncodeModalIcon", t), children: e });
    },
    TitleSection: function ({ children: e, align: t = "center" }) {
        return (0, r.v)("div", {
            class: { center: "IncodeModalTitleSectionCenter", left: "IncodeModalTitleSectionLeft" }[t],
            children: e,
        });
    },
    Title: function ({ children: e, ref: t, class: i }) {
        return (0, r.v)("h2", {
            id: "incode-modal-title",
            ref: t,
            className: (0, n.n)("IncodeModalTitle", i),
            children: e,
        });
    },
    Subtitle: function ({ children: e, class: t }) {
        let { setHasDescription: i } = l();
        return (
            (0, r.f)(() => (i(!0), () => i(!1)), [i]),
            (0, r.v)("p", {
                id: "incode-modal-description",
                className: (0, n.n)("IncodeModalSubtitle", t),
                children: e,
            })
        );
    },
    Actions: function ({ children: e, class: t, orientation: i = "vertical" }) {
        let o = "vertical" === i ? "IncodeModalActionsVertical" : "IncodeModalActionsHorizontal",
            s = (0, r.y)(e),
            l = [];
        for (let i = 0; i < s.length; i++) {
            let c = s[i];
            if ((0, r.C)(c) && null != c.props && "object" == typeof c.props && "autoFocus" in c.props)
                return (0, r.v)("div", { class: (0, n.n)(o, t), role: "group", children: e });
            l.push((0, r.C)(c) && 0 === i ? (0, r.b)(c, { [a.t]: "" }) : c);
        }
        return (0, r.v)("div", { class: (0, n.n)(o, t), role: "group", children: l });
    },
};
