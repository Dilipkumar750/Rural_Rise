import React from "react";
import HeaderComponent from "../../components/HeaderComponent";
import View from "../../components/View";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";


function Test() {
    return (
        <>
            <HeaderComponent page="Progress Chart" title="Check Progress" />
            <View style={{ padding: '1rem', display: 'grid', gap: '1rem' }}>
                <h3>Math Text</h3>
                <View>
                    <View style={{ display: "flex", gap: '1rem' }}>
                        <span>1</span>
                        <View>
                            <p>Mohan has four Rs. 5 coins, out of which he gave 3 Rs. 5 coins to buy a toy. How much money, he is left with?</p>
                            <form>
                                <label>
                                    <input type="radio" name="choice" value="Choice 1" /> Rs.2
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 2" /> Rs.10
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 3" /> Rs.26
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 4" /> Rs.223
                                </label><br />
                            </form>
                        </View>
                    </View>
                    <View style={{ display: "flex", gap: '1rem' }}>
                        <span>2</span>
                        <View>
                            <p>Which of the following note does not exist?</p>
                            <form>
                                <label>
                                    <input type="radio" name="choice" value="Choice 1" /> Rs.5
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 2" /> Rs.10
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 3" /> Rs.15
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 4" /> Rs.20
                                </label><br />
                            </form>
                        </View>
                    </View>
                    <View style={{ display: "flex", gap: '1rem' }}>
                        <span>3</span>
                        <View>
                            <p>Which of the following note does not exist?</p>
                            <form>
                                <label>
                                    <input type="radio" name="choice" value="Choice 1" /> Rs.5
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 2" /> Rs.10
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 3" /> Rs.15
                                </label><br />
                                <label>
                                    <input type="radio" name="choice" value="Choice 4" /> Rs.20
                                </label><br />
                            </form>
                        </View>
                    </View>

                </View>
            </View>
            <View style={{ margin: '0 auto', width: 'fit-content' }}><Link to={`/MentorTestSuccess`}><Button style={{ backgroundColor: '#DBDC31', border: '0', padding: "4px 20px", color: 'black' }}>Submit</Button></Link></View>
        </>
    );
}

export default Test;
