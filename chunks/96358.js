var i = n(620632),
    r = n(73153),
    a = n(652215);
n.d(
    t,
    {},
    {
        S: async function () {
            (await i.Bo.post({ url: a.Rsh.AGE_VERIFICATION_RESET, rejectWithError: !0 }),
                r.h.dispatch({ type: "AGE_VERIFICATION_RESET" }));
        },
    },
);
