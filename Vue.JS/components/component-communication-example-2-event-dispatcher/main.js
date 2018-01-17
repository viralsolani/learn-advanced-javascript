window.Event = new class {

    constructor() {
        this.vue = new Vue();
    }

    fire (event, data = null) {
        this.vue.$emit(event,data);
    }

    listen (event, callback) {
        this.vue.$on(event,callback);
    }
}


Vue.component('coupon', {
    template : '<input placehoder="Enter your coupon code" @blur="onCouponApplied">',

     methods: {
        onCouponApplied() {
            //this.$emit('applied');
            Event.fire('applied');
        }
    }


});

new Vue({
    el : '#root',

    data: {
        couponApplied: false
    },

    created(){
        Event.listen('applied', () => this.onCouponApplied());
    },

    methods: {
        onCouponApplied() {
            this.couponApplied = true;
        }
    }
});