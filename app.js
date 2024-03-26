const app = Vue.createApp({
    data() {
        return {
            isPopupOpen: false,
            formData: {
                name: '',
                email: '',
                phone: '',
                address: ''
            },
            currentPage: 'home'
        };
        
    },
    methods: {
        openPopup() {
            this.isPopupOpen = true;
            
        },
        closePopup() {
            this.isPopupOpen = false;
        },
        submitForm() {
            
            console.log('Form submitted:', this.formData);

            // Генерация JSON из данных и вывод на страницу
            const jsonResult = JSON.stringify(this.formData);
            document.getElementById('json-data').textContent = jsonResult;
            this.jsonResult = JSON.stringify(this.formData);

            this.closePopup(); // Закрываем попап после отправки формы
        },
        showPage(page) {
            this.currentPage = page;
            
        }
    }
});



app.mount('#app');
