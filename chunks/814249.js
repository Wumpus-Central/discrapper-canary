n.d(t, { K: () => I, default: () => N });
var i = n(627968),
    l = n(64700),
    r = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(236698),
    E = n(668131),
    c = n(797632),
    _ = n(468035),
    d = n(304937),
    A = n(985018),
    u = n(158677);
function T(e) {
    let { surveyId: t, survey: n, onClose: s, transitionState: c } = e,
        { getSurveyResponses: T, setResponse: I, trackDisplayedQuestions: N } = (0, E.i)(),
        R = T(t),
        S = (0, _.i)(n),
        [O, C] = l.useState(S.blockId),
        [P, D] = l.useState(S.pageIndex),
        [p, m] = l.useState(!1),
        U = (e, n) => {
            I(t, e, n);
        },
        M = l.useCallback(
            () => (
                p
                    ? s()
                    : (0, a.qfG)((e) =>
                          (0, i.jsx)(r.Modal, {
                              title: A.intl.string(A.t.T9Sx3z),
                              actions: [
                                  { variant: "secondary", text: A.intl.string(A.t.oEAioF), onClick: e.onClose },
                                  {
                                      variant: "critical-primary",
                                      text: A.intl.string(A.t.p89ACt),
                                      onClick: () => {
                                          e.onClose(), s();
                                      },
                                  },
                              ],
                              ...e,
                              children: (0, i.jsx)(a.Text, {
                                  variant: "text-md/normal",
                                  children: A.intl.string(A.t.iCK6G0),
                              }),
                          }),
                      ),
                Promise.resolve()
            ),
            [s, p],
        ),
        h = l.useMemo(() => (null == O ? [] : (0, _.uy)(n, { blockId: O, pageIndex: P, responses: R })), [n, O, P, R]),
        g = l.useCallback(() => {
            if (null == n || null == O) return;
            let e = (0, _.vt)(n, { blockId: O, pageIndex: P, responses: R });
            N(t, h), e.isComplete && o.Ay.submitSurveyResponse(t, R), C(e.blockId), D(e.pageIndex), m(e.isComplete);
        }, [n, O, P, R, t, h, N]);
    l.useEffect(() => {
        0 === h.length && g();
    }, [h, g]);
    let y = l.useMemo(() => {
        if (p) return !1;
        for (let e of h) {
            let t = n.Questions[e];
            if (t?.Validation?.Settings?.ForceResponse === "ON") {
                let t = R[e];
                if (null == t || "" === t.trim()) return !1;
            }
        }
        return !0;
    }, [p, h, n, R]);
    return p
        ? (0, i.jsxs)(r.Modal, {
              transitionState: c,
              onClose: s,
              size: "md",
              title: A.intl.string(A.t.OSqLUF),
              actions: [{ variant: "primary", text: A.intl.string(A.t.i4jeWR), onClick: s }],
              children: [
                  (0, i.jsx)(a.Text, { variant: "text-md/normal", children: A.intl.string(A.t["2scvdw"]) }),
                  (0, i.jsx)(a.Text, { variant: "text-md/normal", children: A.intl.string(A.t.chZxOD) }),
              ],
          })
        : (0, i.jsx)(r.Modal, {
              transitionState: c,
              onClose: M,
              title: A.intl.string(A.t.OSqLUF),
              size: "md",
              actions: [{ variant: "primary", text: A.intl.string(A.t.PDTjLN), onClick: g, disabled: !y }],
              children: (0, i.jsx)("div", {
                  style: { width: "100%" },
                  children:
                      0 === h.length
                          ? null
                          : (0, i.jsx)("div", {
                                className: u.Qs,
                                children: h.map((e) => {
                                    let t = n.Questions[e];
                                    return null == t
                                        ? null
                                        : (0, i.jsx)(
                                              d.A,
                                              { question: t, questionId: e, responses: R, onResponseChange: U },
                                              e,
                                          );
                                }),
                            }),
              }),
          });
}
async function I(e) {
    null != (await o.Ay.fetchSurveyDetails(e)) &&
        (E.i.getState().clearSurveyResponses(e),
        (0, a.mMO)(
            async () => {
                let { default: t } = await Promise.resolve().then(n.bind(n, 814249));
                return (n) => (0, i.jsx)(t, { ...n, surveyId: e });
            },
            { onCloseRequest: () => {} },
        ));
}
function N(e) {
    let { surveyId: t, onClose: n, transitionState: l } = e,
        r = (0, s.bG)([c.A], () => c.A.getSurvey(t));
    return null == r
        ? (0, i.jsx)(a.Text, { variant: "text-md/medium", className: u.Lq, children: A.intl.string(A.t.MKDeyL) })
        : (0, i.jsx)(T, { surveyId: t, survey: r, onClose: n, transitionState: l });
}
