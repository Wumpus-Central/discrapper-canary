function r(e, t, n) {
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
n.d(t, { q: () => i });
class i {
    toSubmission() {
        return {
            id: this.id,
            data: {
                type: this.type,
                application_id: this.applicationId,
            },
        };
    }
    isDiscardable() {
        return !1;
    }
    isValid() {
        return !0;
    }
    isEqual(e) {
        return e instanceof i && e.applicationId === this.applicationId;
    }
    getProfileAnalyticsOptions() {
        return {
            widgetType: this.type,
            applicationId: this.applicationId,
        };
    }
    getProfileEditAnalyticsOptions() {
        return {
            widgetEdited: this.type,
            applicationId: this.applicationId,
        };
    }
    constructor({ id: e, type: t, applicationId: n }) {
        r(this, "id", void 0),
            r(this, "type", void 0),
            r(this, "applicationId", void 0),
            (this.id = e),
            (this.type = t),
            (this.applicationId = n);
    }
}
