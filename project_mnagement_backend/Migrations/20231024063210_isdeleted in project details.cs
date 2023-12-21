using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace project_management.Migrations
{
    /// <inheritdoc />
    public partial class isdeletedinprojectdetails : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "ProjectDetailsTable",
                type: "bit",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "ProjectDetailsTable");
        }
    }
}
