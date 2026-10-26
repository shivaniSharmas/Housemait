import Image from "next/image";

export default function Things(){
    return(
         <div className="things yours-family  padding-bottom padding-top max-width">
               <div className="story-top text-center">
                  <h2>The little things, handled.</h2>
                  <p>Housemait quietly takes care of the admin around the
                     edges of family life, so nothing slips.
                  </p>
               </div>

               <div className="things-bottom">
                    <div className="cards">
                        <div className="card">
                            <div>
                             <h3>School letters, read for you</h3>
                             <p>Forward the class newsletter and every date lands straight in the family calendar.</p>
                               </div>
                             <div className="card-row">
                                  <div className="card-row-blue">
                                            Newsletter scanned · 3 dates found ✓
                                  </div>

                                  <div className="card-row-yellow">
                                      <div className="text-left">Class photo day</div>
                                      <div className="text-right">Fri 10 Oct</div>
                                  </div>
                                   <div className="card-row-yellow">
                                      <div className="text-left">Trip payment due</div>
                                      <div className="text-right">Wed 15 Oct</div>
                                  </div>
                                   <div className="card-row-yellow">
                                      <div className="text-left">No school · teacher day</div>
                                      <div className="text-right">Mon 24 Nov</div>
                                  </div>
                             </div>
                        </div>
                        
                    </div>

                    <div className="cards ">
                        <div className="card">
                            <div>
                             <h3>Kids build healthy habits</h3>
                             <p>Child Mode lets kids see their day, tick off their tasks, earn stars and spend them on rewards.</p>
                              </div>
                             <div className="card-row card-img">
                                  <img src="/img/eight.jpg"
                                  alt="kids"
                                  width= {300}
                                  height={500}
                                  />
                             </div>
                        </div>

                        
                    </div>


                    <div className="cards card-3">
                        <div className="card">

                            <div>
                             <h3>Store documents & moments</h3>
                             <p>Keep school letters, consent forms, insurance, passports and precious memories in a single, searchable place.</p>
                           </div>
                             <div className="card-row">
                                

                                  <div className="card-row-yellow">
                                      <div className="text-left">Swimming consent form</div>
                                      <div className="text-right">School</div>
                                  </div>
                                   <div className="card-row-yellow">
                                      <div className="text-left">Home insurance policy</div>
                                      <div className="text-right">Home</div>
                                  </div>
                                   <div className="card-row-yellow">
                                      <div className="text-left">Passports × 4</div>
                                      <div className="text-right">Travel</div>
                                  </div>
                             </div>
                        </div>

                        
                    </div>


                    <div className="cards card-4">
                        <div className="card">
                            <div>
                             <h3>Receipts, read for you</h3>
                             <p>Snap your grocery receipt and Housemait automatically checks items off your shopping list</p>
                             </div>
                             <div className="card-row">
                                  
                                  <div className="card-row-last-card">
                                      <div className="receipt active">
                                        <div className="receipt-title">
                                            GREEN & GROCER
                                        </div>

                                        <div className="receipt-items">
                                            <div className="receipt-row">
                                            <span>Strawberries</span>
                                            <span>$3.99</span>
                                            </div>

                                            <div className="receipt-row">
                                            <span>Penne ×2</span>
                                            <span>$2.50</span>
                                            </div>

                                            <div className="receipt-row ">
                                            <span>Milk 1 gal</span>
                                            <span>$3.49</span>
                                            </div>
                                        </div>

                                        <div className="receipt-total">
                                            <span>TOTAL</span>
                                            <span>$9.98</span>
                                        </div>
                                        </div>
                                  </div>
                                  <div className="card-row-blue">
                                                 Filed → Groceries · $9.98  ✓
                                  </div>

                             </div>
                        </div>

                        
                    </div>


               </div>


         </div>
    );
}