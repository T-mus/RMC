

//| Form(not created) ↓
/* (function () {
    //| Click outside ↓
    document.addEventListener('click', function (event) {
        let isClickInside = spoller.contains(event.target);

        //  Custom select ↓
        if (!isClickInside && spollerContent.style.maxHeight) {
            spollerContent.style.maxHeight = null;
            spoller.classList.remove('active');
        }
    });


    let form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();

        let formData = new FormData(form);
        console.log([...formData.entries()]);

        let error = formValidate(form);
        if (error == 0) {
            form.classList.add('_sending');

            let response = await fetch('sending.php', {
                method: 'POST',
                body: formData,
            });
            try {
                let result = await response.json();
                clearPreview();
                form.reset();
                form.classList.remove('_sending');
            }
            catch {
                alert("Something was wrong.")
                form.classList.remove('_sending');
            }
        }
        else {
            alert('Fill the required fields !');
        }
    }

    //| Validate function ↓
    function formValidate(form) {
        let error = 0,
            formRequire = document.querySelectorAll('._req');

        for (let i = 0; i < formRequire.length; i++) {
            let input = formRequire[i];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (checkEmail(input) == false) {
                    formAddError(input);
                    error++;
                }
            }
            else if (input.classList.contains('number')) {
                let telNumber = input.value.replace(/\D/g, '');
                if (checkNumber(input) == false && telNumber.length > 15 || telNumber.length < 7) {
                    formAddError(input);
                    error++;
                }
                else {
                    //input.setAttribute('href', `tel:+${telNumber}`);
                }
            }
            else if (input.value === "") {
                formAddError(input);
                error++;
            }
        }
        return error;
    }

    //| Addintion error classes ↓
    function formAddError(input) {
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
    }

    //| Regex ↓
    formsValidation.checkEmail(input) {
        return /^\w+([\._-]?\w+)*@\w+([\._-]?\w+)*(\.[a-zA-Z]{2,8})+$/.test(input.value);
    }
    formsValidation.checkNumber(input) {
        return /^(\+|00)\d{1,3}[- ]?\(?(\d{3})\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/.test(input.value);
    }

    // Select ↓
    let spoller = document.querySelector('.select__label'),
        spollerContent = document.querySelector('.select__options'),
        selectOption = document.querySelectorAll('.select__option'),
        selectTitle = document.querySelector('.select__title'),
        selectInput = document.querySelector('.select__input');

    selectOption.forEach((option) => {
        option.addEventListener('click', () => {
            selectTitle.innerHTML = option.innerHTML;
            selectInput.value = option.innerHTML;

            selectOption.forEach((item) => {
                item.classList.remove('_selected');
            });
            option.classList.add('_selected');

            spollerContent.style.maxHeight = null;
            spoller.classList.remove('active');
        });
    });

    spoller.addEventListener('click', () => {
        let spollerContent = spoller.nextElementSibling;

        if (spollerContent.style.maxHeight) {
            spollerContent.style.maxHeight = null;
            spollerContent.style.cssText = `
                max-height: ${null};
            `;
            spoller.classList.remove('active');
        }
        else {
            spollerContent.style.cssText = `
                max-height: ${spollerContent.scrollHeight}px;
            `;
            spoller.classList.add('active');
        }
    });

    //| Image uploader ↓
    function noop() { }

    function uploadFile(options = {}) {
        let fileInput = document.querySelector('.upload__input'),
            openBtn = document.querySelector('._js-open-btn'),
            uploadBtn = document.querySelector('._js-upload-btn'),
            preview = document.createElement('div'),
            files = [],
            onUpload = options.onUpload ?? noop;

        fileInput.insertAdjacentElement('afterend', preview);
        preview.classList.add('preview');

        let triggerInput = (e) => { fileInput.click() };
        openBtn.addEventListener('click', triggerInput);

        let changeHandler = (e) => {
            if (!e.target.files.length) {
                return;
            }

            files = Array.from(e.target.files);
            files.forEach((file) => {
                if (!file.type.match('image')) {
                    return;
                }

                let reader = new FileReader();

                reader.onload = (e) => {
                    preview.style = 'margin-bottom: 20px';
                    preview.insertAdjacentHTML('afterbegin',
                        `
                        <div class="preview__item">
                            <div class="preview__close" data-name="${file.name}"></div>
                            <img src="${e.target.result}"/>
                        </div>
                    `);
                }

                reader.readAsDataURL(file);
            });

        }

        let removeHandler = (e) => {
            if (!e.target.dataset) {
                return;
            }

            let name = e.target.dataset.name;
            files = files.filter(file => file.name != name);
            let block = preview.querySelector(`[data-name="${name}"]`).closest('.preview__item');

            block.classList.add('_removing');

            setTimeout(() => { block.remove() }, 300);
            if (files.length == 0) {
                preview.style = 'margin-bottom: 0px';
            }
        }

        let uploadHandler = (e) => {
            preview.querySelectorAll('.preview__close').forEach((i) => {
                i.remove();
            });
            onUpload(files);
        }

        fileInput.addEventListener('change', changeHandler);
        preview.addEventListener('click', removeHandler);
        uploadBtn.addEventListener('click', uploadHandler);

        // Settings ↓
        if (options.multi) {
            fileInput.setAttribute('multiple', 'true');
        }

        if (options.accept && Array.isArray(options.accept)) {
            fileInput.setAttribute('accept', options.accept.join(','));
        }

        // Cleaning preview after sending ↓
        function clearPreview() {
            preview.innerHTML = '';
            preview.remove;
        }

    }


    uploadFile({
        multi: true,
        accept: ['.png', '.jpeg', '.jpg', '.gif',],
        onUpload(files) {
            //formData = files;
        }
    });
})();  */