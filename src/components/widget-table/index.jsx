import React from 'react';

export default function WidgetTable(props) {
    const { error, isLoaded, data, sortBy } = props;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <section>
                <span className="title">MEDAL COUNT</span>
                <div className="divTable medalCount">
                    <div className="divTableHeading">
                        <div className="divTableRow">
                            <div className="divTableHead rank-col"></div>
                            <div className="divTableHead code-col"></div>
                            <div className="divTableHead"></div>
                            <div className="divTableHead number-col circle gold-col" onClick={() => sortBy('gold')}></div>
                            <div className="divTableHead number-col circle silver-col" onClick={() => sortBy('silver')}></div>
                            <div className="divTableHead number-col circle bronze-col" onClick={() => sortBy('bronze')}></div>
                            <div className="divTableHead total-col" onClick={() => sortBy('total')}>TOTAL</div>
                        </div>
                    </div>
                    <div className="divTableBody">
                        {
                            data.slice(0, 10).map((row, index) => (
                                <div className="divTableRow" key={index}>
                                    <div className="divTableCell rank-col">{index + 1}</div>
                                    <div className="divTableCell flags-col"><div className="flag" style={{backgroundPosition: '0 -' + row.contryAlphaRank * 17 + 'px'}}></div></div>
                                    <div className="divTableCell code-col">{row.code}</div>
                                    <div className="divTableCell number-col">{row.gold}</div>
                                    <div className="divTableCell number-col">{row.silver}</div>
                                    <div className="divTableCell number-col">{row.bronze}</div>
                                    <div className="divTableCell total-col">{row.total}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        )
    }
};