console.log("CV screener js");
const Applicants = [
    {
        name: "Jatin",
        age: "19",
        gender: "male",
        city: "Jaipur",
        role: "web-developer",
        experience: "3",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    
    {
        name: "Rohan",
        age: "15",
        gender: "male",
        city: "Alwar",
        role: "Programmer",
        experience: "1",
        image: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    
    {
        name: "Rahul",
        age: "19",
        gender: "male",
        city: "Alwar",
        role: "Manager",
        experience: "0",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    
    {
        name: "Ayush",
        age: "19",
        gender: "male",
        city: "Jaipur",
        role: "Marketing-head",
        experience: "2",
        image: "https://randomuser.me/api/portraits/men/12.jpg"
    }
];

function cvIterator(data) {
    
    let index = 0;
    return {
        next: function () {
            return (index < data.length) ?
            { value: data[index++], done: false } : { done: true }
        }
    }
}
let candidateData = cvIterator(Applicants);
nextCV();

let nextBtn = document.getElementById('nextBtn');
nextBtn.addEventListener('click', nextCV);

function nextCV() {
    const currentCandidate = candidateData.next().value;
    if (currentCandidate != undefined) {
        
        let image = document.getElementById('image').innerHTML = `<image src="${currentCandidate.image}">`;
        let profile = document.getElementById('profile').innerHTML = `<ul class="list-group">
        <li class="list-group-item">${currentCandidate.name}</li>
        <li class="list-group-item">${currentCandidate.age}</li>
        <li class="list-group-item">${currentCandidate.gender}</li>
        <li class="list-group-item">${currentCandidate.city}</li>
        <li class="list-group-item">${currentCandidate.role}</li>
        <li class="list-group-item">${currentCandidate.experience}</li>
        </ul>`;
    }
    else{
        alert('List ended');
        window.location.reload();
    }
}

