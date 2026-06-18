"use strict";
n.d(t, { v: () => i });
class i extends Error {
    extraSentryInformation;
    errorHandlingBehavior;
    constructor({ message: e, extraSentryInformation: t = null, errorHandlingBehavior: n = "close-and-alert" }) {
        super(e), (this.name = new.target.name), (this.extraSentryInformation = t), (this.errorHandlingBehavior = n);
    }
}
