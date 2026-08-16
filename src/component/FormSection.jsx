import React, { useState, useEffect } from "react";

const FormSection = () => {
  const [F_Name, setF_Name] = useState("");
  const [L_Name, setL_Name] = useState("");
  const [email, setEmail] = useState("");
  const [members, setMembers] = useState([]); 
  const [editID, setEditID] = useState(null); 

 
  const fetchMembers = async () => {
    try {
      const res = await fetch("http://localhost:5000/notes");
      const data = await res.json();
      setMembers(data);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);


  const handleSubmit = async () => {
    if (!F_Name || !L_Name || !email) {
      alert("Please fill all fields!");
      return;
    }

    const url = editID 
      ? `http://localhost:5000/notes/${editID}` 
      : "http://localhost:5000/create";
    
    const method = editID ? "PUT" : "POST";

    try {
      const res = await fetch(url, {
        method: method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ F_Name, L_Name, email }),
      });

      if (res.ok) {
        alert(editID ? "Updated Successfully!" : "Signed Up Successfully!");
        resetForm();
        fetchMembers();
      }
    } catch (err) {
      console.error("Operation failed", err);
    }
  };

  const deleteMember = async (id) => {
    if (window.confirm("Are you sure you want to remove this member?")) {
      await fetch(`http://localhost:5000/notes/${id}`, { method: "DELETE" });
      fetchMembers();
    }
  };


  const handleEdit = (member) => {
    setEditID(member._id);
    setF_Name(member.F_Name);
    setL_Name(member.L_Name);
    setEmail(member.email);
  };

  const resetForm = () => {
    setF_Name("");
    setL_Name("");
    setEmail("");
    setEditID(null);
  };

  return (
    <div className="w-full py-20 flex flex-col items-center bg-white">
      <div className="flex justify-center gap-x-24">
        
        <div className="max-w-md space-y-4">
          <h3 className="text-black font-bold text-2xl tracking-widest uppercase">
            Waffle Records
          </h3>
          <p className="text-gray-700 text-sm">
            As classic as our waffle. As sweet as our pie.
          </p>
          <div className="flex h-60 w-100 overflow-hidden border">
            <div className="w-3/4 h-full">
              <img src="/imgi_50_jukebox-desktop@2x.webp" alt="Jukebox" className="w-full h-full object-cover" />
            </div>
            <div className="w-1/4 h-full bg-yellow-400 flex flex-col items-center justify-center gap-7 ">
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center pointer-events-auto cursor-pointer">
                <i className="fa-regular fa-circle-play text-yellow-400 hover:text-white"></i> 
              </div>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer">
                <i className="fa-solid fa-pause text-yellow-400 hover:text-white"></i>
              </div>
              <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center cursor-pointer">
                <i className="fa-solid fa-stop text-yellow-400 hover:text-white"></i>
              </div>
            </div>
          </div>

       
          <div className="mt-4 border-t pt-4">
            <h4 className="font-bold text-sm mb-2">CLUB MEMBERS:</h4>
            <div className="max-h-40 overflow-y-auto space-y-2">
              {members.map((m) => (
                <div key={m._id} className="flex justify-between items-center bg-gray-50 p-2 text-xs border">
                  <span>{m.F_Name} {m.L_Name}</span>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(m)} className="text-blue-600 font-bold hover:underline">EDIT</button>
                    <button onClick={() => deleteMember(m._id)} className="text-red-600 font-bold hover:underline">REMOVE</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      
        <div className="max-w-md space-y-4">
          <h3 className="text-black font-bold text-2xl tracking-wider uppercase">
            Regulars Get The Best Perks
          </h3>
          <p className="text-gray-700 text-sm">
            For special offers, become a member of our Regulars Club.
          </p>
          <div
            className="w-100 h-72 p-6 flex flex-col gap-4 bg-cover bg-center text-sm"
            style={{ backgroundImage: "url('/imgi_52_perks-form.webp')" }}
          >
            <input 
              type="text"
              value={F_Name}
              onChange={(e) => setF_Name(e.target.value)}
              placeholder="First Name (Required)"
              className="p-2 w-64 bg-white placeholder:text-black outline-none"
            />
            <input
              type="text"
              value={L_Name}
              onChange={(e) => setL_Name(e.target.value)}
              placeholder="Last Name (Required)"
              className="p-2 w-64 bg-white placeholder:text-black outline-none"
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address (Required)"
              className="p-2 w-64 bg-white placeholder:text-black outline-none"
            />

            <div className="flex gap-2 mt-2">
              <button 
                onClick={handleSubmit}
                className="bg-yellow-400 px-8 py-2 font-bold hover:bg-black hover:text-yellow-400 duration-700"
              >
                {editID ? "UPDATE" : "SIGN UP"}
              </button>
              {editID && (
                <button onClick={resetForm} className="bg-gray-300 px-4 py-2 font-bold">
                  CANCEL
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;