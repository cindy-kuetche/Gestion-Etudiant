 const form = document.getElementById('student-form');
        const studentList = document.getElementById('student-list');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const matiere = document.getElementById('matiere').value;
            const filiere = document.getElementById('filiere').value;

            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${matiere}</td>
                <td>${filiere}</td>
                <td><button class="delete-btn">Supprimer</button></td>
            `;
            studentList.appendChild(row);
            form.reset();
        });

        studentList.addEventListener('click', function(e) {
            if (e.target.classList.contains('delete-btn')) {
                if (confirm("Voulez-vous vraiment supprimer cet étudiant ?")) {
                    e.target.closest('tr').remove();
                }
            }
        });

