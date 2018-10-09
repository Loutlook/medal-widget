import React from 'react';

export default function WidgetTable(props) {
    const { error, isLoaded, data, sortBy } = props;
    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>
                                <button
                                    onClick={() => sortBy('gold')}
                                >
                                    Gold
                            </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => sortBy('silver')}
                                >
                                    Silver
                            </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => sortBy('bronze')}
                                >
                                    Bronze
                            </button>
                            </th>
                            <th>
                                <button
                                    onClick={() => sortBy('total')}
                                >
                                    Total
                            </button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.slice(0, 10).map((row, index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td className="flags" style={{backgroundPosition: '0 -'+row.contryAlphaRank*17+'px'}}></td>
                                    <td>{row.code}</td>
                                    <td>{row.gold}</td>
                                    <td>{row.silver}</td>
                                    <td>{row.bronze}</td>
                                    <td><strong>{row.total}</strong></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
};