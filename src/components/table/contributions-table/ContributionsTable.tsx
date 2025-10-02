import "./ContributionsTable.css";
import { BASIC_RATES, formatPercent } from "../../../features/contributions/rates";



export default function ContributionsTable() {
    return (
        <table className="contributions-table">
            <thead>
                <tr>
                    <th colSpan={2}>Contribution sociales agricoles</th>
                    <th> montant</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="contributions-table-cell-header">Maladie-Maternité-Invalidité-Décès (MMID)</td>
                    <td>{formatPercent(BASIC_RATES.MMID)}</td>
                </tr>
                <tr>    
                    <td className="contributions-table-cell-header">Vieillesse</td>
                    <td>{formatPercent(BASIC_RATES.VIEILLESSE_BASE)} + {formatPercent(BASIC_RATES.VIEILLESSE_PLAFONNEE)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Allocations familiales (AF)</td>
                    <td>{formatPercent(BASIC_RATES.AF)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Accidents du travail / maladies pro (AT/MP)</td>
                    <td>{formatPercent(BASIC_RATES.ATMP)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan={2}>Contributions «compte de tiers»</th>
                    <th> montant</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="contributions-table-cell-header">Chômage (AC)</td>
                    <td>{formatPercent(BASIC_RATES.AC)}</td>
                </tr>
                <tr>    
                    <td className="contributions-table-cell-header">AGS</td>
                    <td>{formatPercent(BASIC_RATES.AGS)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">FNAL</td>
                    <td>{formatPercent(BASIC_RATES.FNAL)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Versement mobilité (VM)</td>
                    <td>{formatPercent(BASIC_RATES.VM)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Contribution solidarité autonomie (CSA dépendance)</td>
                    <td>{formatPercent(BASIC_RATES.CSA)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Contribution dialogue social</td>
                    <td>{formatPercent(BASIC_RATES.DIALOGUE_SOCIAL)}</td>
                </tr>
            </tbody>
            <thead>
                <tr>
                    <th colSpan={2}>Formation / alternance</th>
                    <th> montant</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="contributions-table-cell-header">Chômage (AC)</td>
                    <td>{formatPercent(BASIC_RATES.AC)}</td>
                </tr>
                <tr>    
                    <td className="contributions-table-cell-header">AGS</td>
                    <td>{formatPercent(BASIC_RATES.AGS)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">FNAL</td>
                    <td>{formatPercent(BASIC_RATES.FNAL)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Versement mobilité (VM)</td>
                    <td>{formatPercent(BASIC_RATES.VM)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Contribution solidarité autonomie (CSA dépendance)</td>
                    <td>{formatPercent(BASIC_RATES.CSA)}</td>
                </tr>
                <tr>
                    <td className="contributions-table-cell-header">Contribution dialogue social</td>
                    <td>{formatPercent(BASIC_RATES.DIALOGUE_SOCIAL)}</td>
                </tr>
            </tbody>
        </table>
    )
}