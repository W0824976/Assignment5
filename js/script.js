$(document).ready(function () {
    // JSON data for fictional characters
    const charactersData = [
    { firstName: 'Stefan', lastName: 'Salvotre', info: 'In 2001, Wesley, then credited as Paul Wasilewski, was one of the main cast members of the short-lived CBS television series Wolf Lake, playing the role of Luke Cates.' },
    { firstName: 'Damon', lastName: 'Salvotre', info: 'Somerhalder was involved in the cleanup after the Deepwater Horizon oil drilling disaster on April 22, 2010. His efforts included cleaning of oiled wildlife and taping public service announcements to let the public know how they could help.' },
    { firstName: 'Caroline', lastName: 'Forbes', info: 'n 2009, she was cast in the CW television series The Vampire Diaries as Caroline Forbes, one of the main characters of the show' },
    { firstName: 'Nina', lastName: 'Dobrev', info: 'Dobrev is a dual citizen of Bulgaria and Canada.[49] She speaks fluent English and Bulgarian, and she is conversant in French.[50][51] While filming The Vampire Diaries, she lived in Atlanta, but she moved to Los Angeles after leaving the series in 2015' },
    { firstName: 'Bonnie', lastName: 'Bennett',  info: 'In December 2008, Graham began filming sci-fi/dance film Boogie Town in Los Angeles. However, shooting the film was put on hold that same month due to payroll issues with background performers.' },
    { firstName: 'Michael', lastName: 'Trevino', info: 'Michael Trevino (born January 25, 1985[1]) is an American actor. He is best known for his roles as Tyler Lockwood on The CW The Vampire Diaries; and as Kyle Valenti in Roswell, New Mexico.' },
    { firstName: 'Klaus', lastName: 'Mikaelson', info: 'Joseph Morgan (born Joseph Martin;[1] 16 May 1981[citation needed]) is an English actor. He is known for playing Niklaus "Klaus" Mikaelson on The CW The Vampire Diaries and its spinoff The Originals in which he is the lead.' },
    
];

    function populateTable(data) {
        const tbody = $('#characters-table tbody');
        tbody.empty();

        data.forEach(character => {
            const row = $('<tr>');
            row.append($('<td>').text(character.firstName));
            row.append($('<td>').text(character.lastName));
            row.append($('<td>').text(character.info));
            tbody.append(row);
        });
    }

    populateTable(charactersData);
    $('#search').on('input', function () {
        const searchTerm = $(this).val().toLowerCase();
    
        $('#characters-table tbody tr').each(function () {
            const firstName = $(this).find('td:first-child').text().toLowerCase();
            const isExactMatch = firstName === searchTerm;
    
            $(this).toggleClass('highlighted', searchTerm === '' || isExactMatch);
        });
    });
    

    $('#filter-a-m').on('click', function () {
        filterTable('A', 'M');
    });

    $('#filter-n-z').on('click', function () {
        filterTable('N', 'Z');
    });

    function filterTable(startLetter, endLetter) {
        $('#characters-table tbody tr').each(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            const isInRange = lastName >= startLetter && lastName <= endLetter;

            if (isInRange) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        updateFilterButtonCounts();
    }

    function updateFilterButtonCounts() {
        const countAtoM = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'A' && lastName <= 'M';
        }).length;

        const countNtoZ = $('#characters-table tbody tr:visible').filter(function () {
            const lastName = $(this).find('td:nth-child(2)').text().toUpperCase();
            return lastName >= 'N' && lastName <= 'Z';
        }).length;

        $('#filter-a-m').text(`A - M (${countAtoM})`);
        $('#filter-n-z').text(`N - Z (${countNtoZ})`);
    }
});
