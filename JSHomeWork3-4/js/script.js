//CREATE OBJECT
var testObj = {

    createTitle: function (title) {
        //add a title
        var el = document.createElement('h1');
        el.innerHTML = title;
        el.className = 'text-center';
        //this.container.appendChild(el);
        return el;
    },

    createButton: function (){
        //create a button
        var div = document.createElement('div');
        div.className = 'form-group';
        var button = document.createElement('button');
        button.innerHTML = 'Проверить мои результаты';
        //change the type of button to submit
        button.setAttribute('type', 'submit');
        //add the bootstrap classes
        button.className = 'btn btn-primary center-block';
        div.appendChild(button);
        return div;

    },

    createForm: function (questions) {
        //create form
        var form = document.createElement('form');
        //create a container in the form of questions
        var formContainer = document.createElement('ol');
        form.appendChild(formContainer);
        //add questions in the cycle and in createQuestion convey parameters: question and an array of answers
        for (var i = 0; i < questions.length; i++) {
        formContainer.appendChild(this.createQuestion(questions[i]));
        }
        //add a button to the form
        form.appendChild(this.createButton());
        return form;

    },

    createContainer: function () {
        //creating an element of a container and stored in a property of an object for later use
        //which will store all the content (by bootstrap)
        var el = document.createElement('div');
        //add the bootstrap class
        el.className = "container";
        return el;
    },

    createQuestion: function (question) {
        var el = document.createElement('li');
        el.className = 'form-group';
        el.innerHTML = question.name;

        for (var i = 0; i < question.options.length; i++) {
            var checkbox = document.createElement('div');
            checkbox.className = 'checkbox';
            var label = document.createElement('label');
            label.innerHTML = question.options[i];
            var input = document.createElement('input');
            input.setAttribute('type', 'checkbox');
            //insert element through insertBefore after input
            label.insertBefore(input, label.firstChild);
            checkbox.appendChild(label);
            el.appendChild(checkbox);
        }
        return el;

    },

    createQuiz: function (quiz) {
        this.container = this.createContainer();
        this.container.appendChild(this.createTitle(quiz.title));
        this.container.appendChild(this.createForm(quiz.questions));

        //add the whole container to the page
        document.body.appendChild(this.container);
    }
};

var quiz = {
    title: 'Тест по программированию',
    questions: [
        {
            name: 'Вопрос №1', options: [
            'Вариант ответа №1',
            'Вариант ответа №2',
            'Вариант ответа №3'
        ]
        },
        {
            name: 'Вопрос №2', options: [
            'Вариант ответа №1',
            'Вариант ответа №2',
            'Вариант ответа №3'
        ]
        },
        {
            name: 'Вопрос №3', options: [
            'Вариант ответа №1',
            'Вариант ответа №2',
            'Вариант ответа №3'
        ]
        }
    ]
};


testObj.createQuiz(quiz);