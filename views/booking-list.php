<div class="container-fluid">
    <div class="row">
        <div class="col-sm-12 col-md-12">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User ID</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody id="products">
                </tbody>
            </table>
        </div>
    </div>
</div>
<script id="booking-template" type="text/x-handlebars-template">
    {{#each this}}
        <tr>
            <td>{{id}}</td>
            <td>{{user_id}}</td>
            <td>{{type}}</td>
            <td>{{status}}</td>
            <td>{{created_at}}</td>
        </tr>
    {{/each}}
</script>
