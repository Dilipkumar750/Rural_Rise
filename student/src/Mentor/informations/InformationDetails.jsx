import React, { useEffect, useState } from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";


function InformationDetails() {
    const { title } = useParams();
    const [array, setArray] = useState([]);

    // Define your data
    const Goverment_Grants = [
        [
            "Government Grants",
            [
                "Offered by government departments or ministries at the central, state, and local levels.",
                "Aimed at supporting various educational initiatives, including infrastructure development, scholarships, and teacher training programs.",
            ],
        ],
        [
            "Eligibility Criteria",
            [
                "Residency: Applicants must be residents of rural areas as defined by the grant provider.",
                "Institution Type: Grants may be available for schools, colleges, NGOs, community-based organizations, and individuals.",
                "Project Scope: Eligibility criteria may vary depending on the focus area of the grant, such as infrastructure development, teacher training, or student scholarships.",
                "Compliance: Applicants must adhere to any specific requirements or guidelines outlined by the grant provider.",
            ],
        ],
    ];

    const Student_Education_Loans = [
        [
            "Student Education Loan",
            [
                "Offered by banks and financial institutions to students for higher education in India and abroad.",
                "Cover tuition fees, books, equipment, and sometimes living expenses",
            ],
        ],
        [
            "Eligibility Criteria",
            [
                "Applicant should be an Indian citizen.",
                "Secured admission to a recognized course in India or abroad through an entrance test or a merit-based selection process.",
            ],
        ],
        [
            "Application Process",
            [
                ["Research",
                    [
                        "Identify the loan scheme that fits your educational needs.",
                        "Compare offerings from different banks and financial institutions.",
                    ]],
                ["Prepare Documentation",
                    [
                        "Academic records, admission letters, and course details.",
                        "Financial documents, including income proof, tax returns, and collateral (if required).",
                    ]],
                ["Application Submission",
                    [
                        "Fill out the loan application form provided by the bank or financial institution.",
                        "Submit the form along with all required documents.",
                    ]],
                ["Loan Processing",
                    [
                        "The bank will review the application, perform the necessary due diligence, and may conduct an interview or site visit.",
                        "Once approved, the loan agreement is signed, and the loan amount is disbursed as per the terms.",
                    ]],
            ],
        ],
    ];

    // Other categories (ensure they are filled with similar structure if needed)
    const NGO_Grants = []
    const CSR = []
    const Foundation_Grants = []
    const Internships = []
    const Skill_Development_Loans = []
    const Educational_Infrastructure_Loans = []
    const Scholarships = [
        ["Student Education Loan", ['Aimed at students for pursuing higher education or specific academic programs.']],
        ['Eligibilty Criteria', ["For Students: Academic performance, financial need, and residency in a rural area are common criteria. Some scholarships might also require a competitive examination.", "For Educators: Eligibility often depends on years of service, current teaching role, and commitment to continue teaching in rural areas.", "For Institutions: Must be located in rural areas, with additional criteria possibly including the number of students served, existing infrastructure, and specific needs."]],
        [
            'Application Process',
            [
                "Identify Relevant Incentives: Research and identify incentives relevant to your or your institution's needs.",
                "Check Eligibility: Carefully review the eligibility criteria for each incentive.",
                "Prepare Application: Gather necessary documents, which may include identification, academic records, financial statements, and project proposals.",
                "Submit Application: Follow the application instructions, which may involve online submission or sending documents by mail. Ensure to meet the application deadlines.",
                "Await Decision: After submission, there may be a review period before notification of the outcome."
            ],
        ],
        [
            "Links",
            [
                [
                    "National Scholarship Portal (NSP): A one-stop solution for students seeking scholarships.",
                    ["https://scholarships.gov.in/"]
                ],
                [
                    "Rashtriya Madhyamik Shiksha Abhiyan (RMSA) and Sarva Shiksha Abhiyan (SSA): For infrastructural developments and teacher training.",
                    [
                        "http://rmsaindia.gov.in/",
                        "http://ssa.nic.in/"
                    ]
                ],
                [
                    "Digital India Initiative: For technological access in education.",
                    [
                        "https://www.digitalindia.gov.in/"
                    ]
                ],
                [
                    "Inspire Awards - MANAK: For students exhibiting innovation.",
                    [
                        "http://www.inspireawards-dst.gov.in/"
                    ]
                ],
                [
                    "Teacher Awards: For recognizing the contributions of teachers in rural areas.",
                    ["Relevant state education department websites and http://mhrd.gov.in/ offer details on teacher awards."]
                ]
            ]
        ]
    ]
    const Teacher = []
    const Infrastructure = []
    const Technology = []

    useEffect(() => {
        switch (title) {
            case "Goverment_Grants":
                setArray(Goverment_Grants);
                break;
            case "Student_Education_Loans":
                setArray(Student_Education_Loans);
                break;
            case "Scholarships":
                setArray(Scholarships);
                break;
            default:
                setArray([]);
        }
    }, [title]);

    return (
        <>
            <HeaderComponent page="More Information" title="Employment And Fees" />
            <View>
                <View>
                    <View style={{ width: "80%", margin: "20px auto" }}>
                        {array.map(([header, points], index) => (
                            <View key={index} style={{ marginBottom: "20px" }}>
                                <View
                                    style={{
                                        backgroundColor: "#F0F0F0",
                                        padding: "10px",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                    }}
                                >
                                    {header}
                                </View>
                                <View
                                    style={{
                                        backgroundColor: "#FFFFFF",
                                        padding: "10px",
                                        border: "1px solid black",
                                        borderRadius: "5px",
                                        marginTop: "5px",
                                    }}
                                >
                                    <ul>
                                        {points.map((point, pointIndex) => {
                                            // Handle cases where point is an array or a string
                                            if (Array.isArray(point)) {
                                                // Nested array handling
                                                return (
                                                    <li key={pointIndex}>
                                                        <strong>{point[0]}</strong>
                                                        <ul>
                                                            {point[1].map((subPoint, subPointIndex) => (
                                                                <li key={subPointIndex}>{subPoint}</li>
                                                            ))}
                                                        </ul>
                                                    </li>
                                                );
                                            } else {
                                                // Normal point
                                                return <li key={pointIndex}>{point}</li>;
                                            }
                                        })}
                                    </ul>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            <Button style={{width:'100%',backgroundColor:'#DBDC31',color:'black'}}>OK</Button>
            </View>
        </>
    );
}

export default InformationDetails;
