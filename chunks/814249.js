n.d(t, {
    K: () => N,
    default: () => p,
}),
    n(896048),
    n(733351);
var r = n(627968),
    i = n(64700),
    l = n(158954),
    o = n(311907),
    a = n(397927),
    s = n(236698),
    c = n(668131),
    u = n(797632),
    E = n(468035),
    d = n(304937),
    _ = n(985018),
    T = n(158677);

function A(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var r = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, r);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function O(e) {
    let { surveyId: t, survey: n, onClose: o, transitionState: u } = e,
        { getSurveyResponses: O, setResponse: N, trackDisplayedQuestions: p } = (0, c.i)(),
        R = O(t),
        S = (0, E.i)(n),
        [P, y] = i.useState(S.blockId),
        [f, C] = i.useState(S.pageIndex),
        [D, m] = i.useState(!1),
        g = (e, n) => {
            N(t, e, n);
        },
        h = i.useCallback(
            () => (
                D
                    ? o()
                    : (0, a.qfG)((e) =>
                          (0, r.jsx)(
                              l.Modal,
                              I(
                                  A(
                                      {
                                          title: _.intl.string(_.t.T9Sx3z),
                                          actions: [
                                              {
                                                  variant: "secondary",
                                                  text: _.intl.string(_.t.oEAioF),
                                                  onClick: e.onClose,
                                              },
                                              {
                                                  variant: "critical-primary",
                                                  text: _.intl.string(_.t.p89ACt),
                                                  onClick: () => {
                                                      e.onClose(), o();
                                                  },
                                              },
                                          ],
                                      },
                                      e,
                                  ),
                                  {
                                      children: (0, r.jsx)(a.Text, {
                                          variant: "text-md/normal",
                                          children: _.intl.string(_.t.iCK6G0),
                                      }),
                                  },
                              ),
                          ),
                      ),
                Promise.resolve()
            ),
            [o, D],
        ),
        U = i.useMemo(
            () =>
                null == P
                    ? []
                    : (0, E.uy)(n, {
                          blockId: P,
                          pageIndex: f,
                          responses: R,
                      }),
            [n, P, f, R],
        ),
        b = i.useCallback(() => {
            if (null == n || null == P) return;
            let e = (0, E.vt)(n, {
                blockId: P,
                pageIndex: f,
                responses: R,
            });
            p(t, U), e.isComplete && s.Ay.submitSurveyResponse(t, R), y(e.blockId), C(e.pageIndex), m(e.isComplete);
        }, [n, P, f, R, t, U, p]);
    i.useEffect(() => {
        0 === U.length && b();
    }, [U, b]);
    let M = i.useMemo(() => {
        if (D) return !1;
        for (let r of U) {
            var e, t;
            let i = n.Questions[r];
            if (
                (null == i || null == (t = i.Validation) || null == (e = t.Settings) ? void 0 : e.ForceResponse) ===
                "ON"
            ) {
                let e = R[r];
                if (null == e || "" === e.trim()) return !1;
            }
        }
        return !0;
    }, [D, U, n, R]);
    return D
        ? (0, r.jsxs)(l.Modal, {
              transitionState: u,
              onClose: o,
              size: "md",
              title: _.intl.string(_.t.OSqLUF),
              actions: [
                  {
                      variant: "primary",
                      text: _.intl.string(_.t.i4jeWR),
                      onClick: o,
                  },
              ],
              children: [
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/normal",
                      children: _.intl.string(_.t["2scvdw"]),
                  }),
                  (0, r.jsx)(a.Text, {
                      variant: "text-md/normal",
                      children: _.intl.string(_.t.chZxOD),
                  }),
              ],
          })
        : (0, r.jsx)(l.Modal, {
              transitionState: u,
              onClose: h,
              title: _.intl.string(_.t.OSqLUF),
              size: "md",
              actions: [
                  {
                      variant: "primary",
                      text: _.intl.string(_.t.PDTjLN),
                      onClick: b,
                      disabled: !M,
                  },
              ],
              children: (0, r.jsx)("div", {
                  style: {
                      width: "100%",
                  },
                  children:
                      0 === U.length
                          ? null
                          : (0, r.jsx)("div", {
                                className: T.Qs,
                                children: U.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, r.jsx)(
                                              d.A,
                                              {
                                                  question: t,
                                                  questionId: e,
                                                  responses: R,
                                                  onResponseChange: g,
                                              },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function N(e) {
    null != (await s.Ay.fetchSurveyDetails(e)) &&
        (c.i.getState().clearSurveyResponses(e),
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) =>
                    (0, r.jsx)(
                        t,
                        I(A({}, n), {
                            surveyId: e,
                        }),
                    );
            },
            {
                onCloseRequest: () => {},
            },
        ));
}

function p(e) {
    let { surveyId: t, onClose: n, transitionState: i } = e,
        l = (0, o.bG)([u.A], () => u.A.getSurvey(t));
    return null == l
        ? (0, r.jsx)(a.Text, {
              variant: "text-md/medium",
              className: T.Lq,
              children: _.intl.string(_.t.MKDeyL),
          })
        : (0, r.jsx)(O, {
              surveyId: t,
              survey: l,
              onClose: n,
              transitionState: i,
          });
}
