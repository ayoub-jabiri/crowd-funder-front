import "../style/DashboradPage.css";
import Card from "../components/Dashboard/Card";
import { useEffect, useState } from "react";
import axios from "axios";

const token = "eyJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI2YTBmMWNlNTRjNzJmNWU3MDgxMWUyMDAiLCJuYW1lIjoiYXlvdWJfb3duZXIiLCJlbWFpbCI6ImF5b3ViX293bmVyQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJiJDEwJGQ0UlI5YVVobnJMTnBZLmNWeE15Zk9LWTQua2hVTVBacnQ4bEFDWDgzMmVLaHQ4NWxBNWtDIiwicm9sZSI6Im93bmVyIiwiY3JlYXRlZEF0IjoiMjAyNi0wNS0yMVQxNDo1NTozMy4wNDJaIiwiX192IjowfQ.vJ7cv8kAflIqVneRlakoBwIcejvJ7fx3_EhYxAn6I_w"

function DashboradPage() {
  const [projects, setProjects] = useState([]);


  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get("http://localhost:3000/projects", 
        {
          headers: {
            'Content-Type': "application/json",
            Authorization: `Bearer ${token}`
        }});

        console.log(res.data);
        setProjects(res.data);
      } catch (err) {
        console.log(err.response?.data || err.message);
      }
    };
    getProjects()
  }, []);

  return (
    <div className="dashboard">
      <div className="page-header">
        <header>
          <h3>
            <b>Welcome back 👋</b>
          </h3>
          <p>Here's your financial overview for today.</p>
        </header>

        <section className="stats">
          {projects.map((item) => (
            <Card
              key={item._id}
              title={item.title}
              value={item.value}
              subtitle={item.subtitle}
            />
          ))}
        </section>
      </div>
    </div>
  );
}

export default DashboradPage;
