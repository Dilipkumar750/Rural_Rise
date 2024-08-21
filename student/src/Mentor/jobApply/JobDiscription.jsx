import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import tutorImg from "../../assets/tutor.png";
import javajobImg from "../../assets/javajob.png";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';

const job = [
    {
        id: "1",
        image: tutorImg,
        title: "Lecturer in Computer Science",
        address: "Vasan Institute of Ophthalmology Tamil Nadu",
        type: 'Job Description',
        discription: [
            "3 days ago",
            "₹500 an hour",
            "Part-time",
            "Teach basic computer skills to undergraduate optometry students.",
            "Eligibility PG in relevant stream",
            "Payment for classes 500 Rs per hour",
            "Internship Type: Work-From-Home",
            "Stipend: ₹10,000 month",
            "Benefits: • Flexible schedule  Ability to commute",
            "Relocate: • West Mambalam, Chennai - 600033, Tamil Nadu: Reliably commute or planning to relocate before starting work (Required)",
            "Education: • Master's (Required)  Experience: • Teaching: 1 year (Preferred)  Expected Start Date: 22/04/2024",
        ],
    },
    {
        id: "2",
        image: javajobImg,
        title: "Java Software Engineer",
        address: "Hitachi Energy Chennai, Tamil Nadu",
        type: 'Internship Description',
        discription: [
            "Posted 1 week ago",
            "₹600 an hour",
            "Full-time",
            "Develop and maintain Java applications.",
            "Eligibility: Degree in Computer Science or related field",
            "Benefits: • Health Insurance • 401(k) plan",
            "Relocate: • Chennai, Tamil Nadu: Relocation assistance provided",
            "Education: • Bachelor's Degree (Required)  Experience: • Java Development: 2 years (Preferred)"
        ]
    },
];

function JobDiscription() {
    const { id } = useParams();
    const [jobDetails, setJobDetails] = useState(null);

    useEffect(() => {
        const foundJob = job.find((item) => item.id === id);
        setJobDetails(foundJob || null);
    }, [id]);

    if (!jobDetails) {
        return <p>Job not found.</p>;
    }

    return (
        <>
            <HeaderComponent page="More Information" title="Apply For Jobs" />
            <div style={{ padding: "1rem" }}>
                <h3>{jobDetails.type}</h3>
                <View
                    style={{
                        display: "grid",
                        gridTemplateColumns: "33% 67%",
                        borderRadius: "10px",
                        gap: "1rem",
                    }}
                >
                    <View>
                        <img
                            src={jobDetails.image}
                            alt="job"
                            style={{ width: "100%", border: "1px solid black" }}
                        />
                    </View>
                    <View>
                        <p style={{ fontSize: "14px" }}>{jobDetails.title}</p>
                        <p style={{ fontSize: "14px" }}>{jobDetails.address}</p>
                    </View>
                </View>
                {jobDetails.discription.map((desc, index) => (
                    <p key={index}>{desc}</p>
                ))}
                <View style={{ margin: "0 auto", width: "fit-content" }}>
                    <Link to={`/ApplyForm`}>
                        <Button
                            style={{
                                backgroundColor: "#DBDC31",
                                border: "0",
                                padding: "4px 20px",
                                color: "black",
                            }}
                        >
                            Apply
                        </Button>
                    </Link>
                </View>
            </div>
        </>
    );
}

export default JobDiscription;
