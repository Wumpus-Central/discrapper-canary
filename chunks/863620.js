"use strict";
n.d(t, { u: () => i });
class i {
    timeoutId = null;
    schedule(e, t) {
        this.unschedule(),
            (this.timeoutId = setTimeout(() => {
                (this.timeoutId = null), e();
            }, t));
    }
    unschedule() {
        this.scheduled() && (clearTimeout(this.timeoutId), (this.timeoutId = null));
    }
    scheduled() {
        return null !== this.timeoutId;
    }
}
