let count = 1;
let newrow = '<div class="row mb-1 newrowmedikation" id="rowmedikationmodalbody">' +
    '<div class="col-sm-3">' +
    '<input type="date" class="form-control" aria-label="Datum der Medikation" id="dateanfangmedikation0" name="dateanfangmedikation0">' +
    '</div>' +
    '<div class="col-sm-3">' +
    '<input type="date" class="form-control" aria-label="Datum der Medikation" id="dateendemedikation0" name="dateendemedikation0">' +
    '</div>' +
    '<div class="col-sm-3">' +
    '<input class="form-control" list="listmedikation" id="datalistmedikation0" name="datalistmedikation0">' +
    '<datalist id="listmedikation">' +
    '<optgroup id="Antiepileptika" label="Antiepileptika">' +
    '<option id="Brivaracetam">Brivaracetam</option>' +
    '<option id="Diazepam">Diazepam</option>' +
    '<option id="Lacosamid">Lacosamid</option>' +
    '<option id="Lamotrigin">Lamotrigin</option>' +
    '<option id="Levetiracetam">Levetiracetam</option>' +
    '<option id="Phenytoin">Phenytoin</option>' +
    '<option id="Valproinsäure">Valproinsäure</option>' +
    '</optgroup>' +
    '<optgroup id="Antikoagulatien" label="Antikoagulatien">' +
    '<option id="Acetylsalicylsäure + Atorvastatin + Ramipril">Acetylsalicylsäure + Atorvastatin + Ramipril</option>' +
    '<option id="Apixaban">Apixaban</option>' +
    '<option id="Enoxaparin">Enoxaparin</option>' +
    '<option id="Heparin (natürliches)">Heparin (natürliches)</option>' +
    '<option id="Phenprocoumon">Phenprocoumon</option>' +
    '<option id="Rivaroxaban">Rivaroxaban</option>' +
    '<option id="Tinzaparin">Tinzaparin</option>' +
    '</optgroup>' +
    '<optgroup id="Thrombozytenaggregationshemmer" label="Thrombozytenaggregationshemmer">' +
    '<option id="Acetylsalicylsäure">Acetylsalicylsäure</option>' +
    '<option id="Clopidogrel">Clopidogrel</option>' +
    '<option id="Prasugrel">Prasugrel</option>' +
    '<option id="Ticagrelor">Ticagrelor</option>' +
    '</optgroup>' +
    '<optgroup id="Antibiotika" label="Antibiotika">' +
    '<option id="Amoxicillin">Amoxicillin</option>' +
    '<option id="Amoxicillin + Clavulansäure">Amoxicillin + Clavulansäure</option>' +
    '<option id="Ampicillin">Ampicillin</option>' +
    '<option id="Ampicillin + Sulbactam">Ampicillin + Sulbactam</option>' +
    '<option id="Cefotaxim">Cefotaxim</option>' +
    '<option id="Ceftriaxon">Ceftriaxon</option>' +
    '<option id="Cefuroxim">Cefuroxim</option>' +
    '<option id="Ciprofloxacin (zur Einnahme oder Infusion)">Ciprofloxacin (zur Einnahme oder Infusion)</option>' +
    '<option id="Clindamycin">Clindamycin</option>' +
    '<option id="Flucloxacillin">Flucloxacillin</option>' +
    '<option id="Levofloxacin">Levofloxacin</option>' +
    '<option id="Linezolid">Linezolid</option>' +
    '<option id="Metronidazol">Metronidazol</option>' +
    '<option id="Ofloxacin">Ofloxacin</option>' +
    '<option id="Piperacillin + Tazobactam">Piperacillin + Tazobactam</option>' +
    '<option id="Pivmecillinam">Pivmecillinam</option>' +
    '<option id="Rifampicin">Rifampicin</option>' +
    '<option id="Vancomycin">Vancomycin</option>' +
    '</optgroup>' +
    '<optgroup id="Glukokortikoide" label="Glukokortikoide">' +
    '<option id="Dexamethason">Dexamethason</option>' +
    '<option id="Hydrocortison">Hydrocortison</option>' +
    '<option id="Prednisolon">Prednisolon</option>' +
    '</optgroup>' +
    '</datalist>' +
    '</div>' +
    '<div class="col-sm-3">' +
    '<div class="input-group mb-1" id="dosismedikationgroup">' +
    '<input type="number" class="form-control " aria-label="dosismedikation" id="dosismedikation0" name="dosismedikation0" placeholder="Dosis">' +
    '<span class="input-group-text">mg</span>' +
    '</div>' +
    '</div>' +
    '</div>';


function addnewinput() {
    if ($("#dateanfangmedikation0").val() != 0) {
        if ($("#datalistmedikation0").val() != 0) {
            if ($("#dosismedikation0").val() != 0) {
                console.log(count);
                //$("#medikationmodalbody").append(newrow)


                $("#rowmedikationmodalbody").clone().appendTo('#medikationmodalbody');
                $("#dateanfangmedikation0").attr("id", "dateanfangmedikation" + count).attr("name", "dateanfangmedikation" + count).val("").removeAttr("onchange");
                $("#dateendemedikation0").attr("id", "dateendemedikation" + count).attr("name", "dateendemedikation" + count).val("").removeAttr("onchange");
                $("#datalistmedikation0").attr("id", "datalistmedikation" + count).attr("name", "datalistmedikation" + count).val("").removeAttr("onchange");
                $("#dosismedikation0").attr("id", "dosismedikation" + count).attr("name", "dosismedikation" + count).val("").removeAttr("onchange");

                count++;
            }
        }
    }
}