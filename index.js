let userForm=document.getElementById("user-form");
const retrieveEntries =()=>{
   // localStorage.removeItem("user-entries");
    let entries=localStorage.getItem('user-entries');
    if(entries)
    {
        entries=JSON.parse(entries);
        //entries=[];
    }
    else{
        entries=[];
    }
    return entries;
}
let userEntries=retrieveEntries();
const displayEntries=()=>{
    const entries=retrieveEntries();
    const tableEntries=entries.map((entry)=>{
        const nameCell=`<td>${entry.name}</td>`;
        const emailCell=`<td>${entry.email}</td>`;
        const passwordCell=`<td>${entry.password}</td>`;
        const dobCell=`<td>${entry.dob}</td>`;
        const acceptTermsCell=`<td>${entry.acceptedTermsAndconditions}</td>`;
    //class='border px-4 py-2
        const row=`<tr>${nameCell} ${emailCell} ${passwordCell} ${dobCell} ${acceptTermsCell}</tr>`;
        return row;
    }).join("\n");
//class="table-auto w-full"
//class="px-4 py-2"
const table=`<table class="table table-bordered"><tr>
<th >Name</th>
<th >Email</th>
<th >Password</th>
<th >dob</th>
<th >accepted terms?</th>
</tr>${tableEntries}
</table>`;
let details=document.getElementById("user-entries");
details.innerHTML=table;
}
const saveuserform= (event) =>
{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const password=document.getElementById("password").value;
    const dob=document.getElementById("dob").value;

    const acceptedTermsAndconditions=document.getElementById("acceptterms").checked;

    const entry={
        name,
        email,
        password,
        dob,
        acceptedTermsAndconditions
    };
    userEntries.push(entry);
    localStorage.setItem("user-entries",JSON.stringify(userEntries));
    displayEntries();
}
userForm.addEventListener("submit",saveuserform);

