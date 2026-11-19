var i = r(582128),
    n = r(869038),
    c = r(153626);
r.d(
    t,
    {},
    {
        A: function (e) {
            let t = e?.code,
                r = (0, c.$)(e),
                [s, o] = i.useState(!1);
            return (
                i.useEffect(() => {
                    null != t &&
                        r &&
                        (async function (e) {
                            try {
                                await n.Ay.resolveGiftCode(e, {
                                    withSubscriptionPlan: !0,
                                    withGiftSubscriptionAgreement: !0,
                                });
                            } catch (e) {
                                n.Ay.reportUnexpectedGiftCodeError(e);
                            }
                            o(!0);
                        })(t);
                }, [t, r]),
                { isResolvingAgreement: r && !s }
            );
        },
    },
);
