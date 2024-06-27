document.addEventListener("DOMContentLoaded", () => {
   function saveTasks() {
      const tasks = [];
      document.querySelectorAll('#my-list li').forEach(li => {
         tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains('checked'),
         });
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
   }

   function loadTasks() {
      const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const list = document.querySelector('#my-list');
      list.innerHTML = ''; // Очищення списку перед завантаженням завдань

      tasks.forEach(task => {
         let li = document.createElement('li');
         let txt = document.createTextNode(task.text);
         li.appendChild(txt);
         if (task.completed) {
            li.classList.add('checked');
         }

         let span = document.createElement('span');
         let txtLi = document.createTextNode('\u00D7');
         span.className = 'close';
         span.appendChild(txtLi);
         li.appendChild(span);

         list.appendChild(li);
      });

      let closeNew = document.querySelectorAll('.close');
      for (let i = 0; i < closeNew.length; i++) {
         closeNew[i].onclick = function () {
            let liClose = this.parentElement;
            liClose.remove();
            saveTasks();
         }
      }
   }

   loadTasks();

   let myList = document.querySelectorAll('#my-list li');

   for (let i = 0; i < myList.length; i++) {
      let span = document.createElement('span');
      let txt = document.createTextNode('\u00D7');
      span.className = 'close';
      span.appendChild(txt);
      myList[i].appendChild(span);
   }

   let close = document.querySelectorAll('.close');

   for (let i = 0; i < close.length; i++) {
      close[i].onclick = function () {
         let liClose = this.parentElement;
         liClose.remove();
         saveTasks();
      }
   }

   let list = document.querySelector('#my-list');
   list.addEventListener('click', function (e) {
      if (e.target.tagName == 'LI') {
         e.target.classList.toggle('checked');
         saveTasks();
      }
   }, false);

   document.querySelector('.btn-add').addEventListener('click', newElement);

   function newElement() {
      console.log('click addBTN');
      let li = document.createElement('li');
      let inputValue = document.querySelector('#header-input').value;
      let txt = document.createTextNode(inputValue);
      if (inputValue === '') {
         alert('Строка події пуста!');
      } else {
         li.appendChild(txt);
         document.querySelector('#my-list').appendChild(li);
         document.querySelector('#header-input').value = '';
      }

      let span = document.createElement('span');
      let txtLi = document.createTextNode('\u00D7');
      span.className = 'close';
      span.appendChild(txtLi);
      li.appendChild(span);

      let closeNew = document.querySelectorAll('.close');

      for (let i = 0; i < closeNew.length; i++) {
         closeNew[i].onclick = function () {
            let liClose = this.parentElement;
            liClose.remove();
            saveTasks();
         }
      }
      saveTasks();
   }
});
