new Vue({
    el: '#app',
    data() {
        return {
            messages: [],
            pages: true,
            model: {
                name: '',
                content: ''
            },
            loading: false
        };
    },
    methods: {
        async query() {
            if (this.model.name == '') return;
            this.loading = true;
            fetch('/get?id=' + encodeURIComponent(this.model.name))
                .then(res => res.json())
                .then(res => {
                this.loading = false;
                this.messages = res.data;
                if (this.messages == 0) {
                    mdui.alert('暂时没有人给你留言！');
                }
            });
        }, async send() {
            if (this.model.name == '') return;
            if (this.model.content == '') return;
            this.loading = true;
            fetch('/send', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'id=' + this.model.name + '&content=' + this.model.content
            })
                .then(res => res.json())
                .then(res => {
                this.loading = false;
                if (res.code == 200) {
                    mdui.alert('留言成功！');
                } else mdui.alert('留言失败！');
            });
        }
    }
});