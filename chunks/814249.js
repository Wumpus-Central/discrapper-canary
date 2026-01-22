n.d(t, {
    K: () => y,
    default: () => O,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    a = n(158954),
    s = n(311907),
    o = n(397927),
    l = n(236698),
    c = n(668131),
    u = n(797632),
    d = n(468035),
    f = n(304937),
    p = n(985018),
    _ = n(158677);

function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function m(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                h(e, t, n[t]);
            });
    }
    return e;
}

function g(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function E(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : g(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function b(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: u } = e,
        { getSurveyResponses: h, setResponse: g, trackDisplayedQuestions: b } = (0, c.i)(),
        y = h(t),
        O = (0, d.i)(n),
        [A, v] = i.useState(O.blockId),
        [S, I] = i.useState(O.pageIndex),
        [T, C] = i.useState(!1),
        N = (e, n) => {
            g(t, e, n);
        },
        R = i.useCallback(
            () => (
                T
                    ? s()
                    : (0, o.qfG)((e) =>
                          (0, r.jsx)(
                              a.Modal,
                              E(
                                  m(
                                      {
                                          title: p.intl.string(p.t.T9Sx3z),
                                          actions: [
                                              {
                                                  variant: "secondary",
                                                  text: p.intl.string(p.t.oEAioF),
                                                  onClick: e.onClose,
                                              },
                                              {
                                                  variant: "critical-primary",
                                                  text: p.intl.string(p.t.p89ACt),
                                                  onClick: () => {
                                                      e.onClose(), s();
                                                  },
                                              },
                                          ],
                                      },
                                      e,
                                  ),
                                  {
                                      children: (0, r.jsx)(o.Text, {
                                          variant: "text-md/normal",
                                          children: p.intl.string(p.t.iCK6G0),
                                      }),
                                  },
                              ),
                          ),
                      ),
                Promise.resolve()
            ),
            [s, T],
        ),
        w = i.useMemo(
            () =>
                null == A
                    ? []
                    : (0, d.uy)(n, {
                          blockId: A,
                          pageIndex: S,
                          responses: y,
                      }),
            [n, A, S, y],
        ),
        P = i.useCallback(() => {
            if (null == n || null == A) return;
            let e = (0, d.vt)(n, {
                blockId: A,
                pageIndex: S,
                responses: y,
            });
            b(t, w), e.isComplete && l.Ay.submitSurveyResponse(t, y), v(e.blockId), I(e.pageIndex), C(e.isComplete);
        }, [n, A, S, y, t, w, b]);
    i.useEffect(() => {
        0 === w.length && P();
    }, [w, P]);
    let D = (e) =>
            0 === w.length
                ? null
                : (0, r.jsx)("div", {
                      className: _.Qs,
                      children: w.map((t) => {
                          let n = e.Questions[t];
                          return null == n
                              ? null
                              : (0, r.jsx)(
                                    f.A,
                                    {
                                        question: n,
                                        questionId: t,
                                        responses: y,
                                        onResponseChange: N,
                                    },
                                    t,
                                );
                      }),
                  }),
        x = i.useMemo(() => {
            if (T) return !1;
            for (let r of w) {
                var e, t;
                let i = n.Questions[r];
                if (
                    (null == i || null == (t = i.Validation) || null == (e = t.Settings) ? void 0 : e.ForceResponse) ===
                    "ON"
                ) {
                    let e = y[r];
                    if (null == e || "" === e.trim()) return !1;
                }
            }
            return !0;
        }, [T, w, n, y]);
    return T
        ? (0, r.jsxs)(a.Modal, {
              transitionState: u,
              onClose: s,
              size: "md",
              title: p.intl.string(p.t.OSqLUF),
              actions: [
                  {
                      variant: "primary",
                      text: p.intl.string(p.t.i4jeWR),
                      onClick: s,
                  },
              ],
              children: [
                  (0, r.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children: p.intl.string(p.t["2scvdw"]),
                  }),
                  (0, r.jsx)(o.Text, {
                      variant: "text-md/normal",
                      children: p.intl.string(p.t.chZxOD),
                  }),
              ],
          })
        : (0, r.jsx)(a.Modal, {
              transitionState: u,
              onClose: R,
              title: p.intl.string(p.t.OSqLUF),
              size: "md",
              actions: [
                  {
                      variant: "primary",
                      text: p.intl.string(p.t.PDTjLN),
                      onClick: P,
                      disabled: !x,
                  },
              ],
              children: (0, r.jsx)("div", {
                  style: {
                      width: "100%",
                  },
                  children: D(n),
              }),
          });
}
async function y(e) {
    null != (await l.Ay.fetchSurveyDetails(e)) &&
        (c.i.getState().clearSurveyResponses(e),
        (0, o.mMO)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        E(m({}, n), {
                            surveyId: e,
                        }),
                    );
            },
            {
                onCloseRequest: () => {},
            },
        ));
}

function O(e) {
    let { surveyId: t, onClose: n, transitionState: i } = e,
        a = (0, s.bG)([u.A], () => u.A.getSurvey(t));
    return null == a
        ? (0, r.jsx)(o.Text, {
              variant: "text-md/medium",
              className: _.Lq,
              children: p.intl.string(p.t.MKDeyL),
          })
        : (0, r.jsx)(b, {
              surveyId: t,
              survey: a,
              onClose: n,
              transitionState: i,
          });
}
