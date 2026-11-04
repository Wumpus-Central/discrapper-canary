n.d(
    t,
    {},
    {
        v: class extends Error {
            extraSentryInformation;
            errorHandlingBehavior;
            skipReportingToSentry;
            constructor({
                message: e,
                extraSentryInformation: t = null,
                errorHandlingBehavior: n = "close-and-alert",
                skipReportingToSentry: i = !1,
            }) {
                (super(e),
                    (this.name = new.target.name),
                    (this.extraSentryInformation = t),
                    (this.errorHandlingBehavior = n),
                    (this.skipReportingToSentry = i));
            }
        },
    },
);
